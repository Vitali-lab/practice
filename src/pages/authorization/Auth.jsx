import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { server } from "../../bff";
import { useState } from "react";
import { Input,Button,ErrorMassage } from "../../components";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions";
import {selectUserRole} from "../../selectors"
import { ROLE } from "../../bff/constants/role";
import { useResetAuthForm } from "../../hooks";
import styled from "styled-components";

const authFormSchema = yup.object().shape({
    login: 
    yup.string()
    .required("Введите логин")
    .matches(/^\w+$/, "Логин должен состоять только из букв и цифр")
    .min(3, "Логин должен содержать минимум 3 символа")
    .max(15, "Логин должен содержать максимум 15 символов"),
    password: 
    yup.string()
    .required("Введите пароль")
    .matches(/^[\w#%]+$/, "Пароль должен состоять только из букв, цифр и символов # и %")
    .min(6, "Пароль должен содержать минимум 6 символов")
    .max(30, "Пароль должен содержать максимум 30 символов"),

});


const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 300px;
    
    
`




export const AuthContainer = ( { className }) => {

    const dispatch = useDispatch();
    const role = useSelector(selectUserRole);



    const { 
        register, 
        reset,
        handleSubmit, 
        formState: {errors},} = useForm({ 
        defaultValues: {
            login: "",
            password: "",
        } ,
        resolver: yupResolver(authFormSchema),
    });

  useResetAuthForm(reset)

    const [serverError, setServerError] = useState(null);
    const onSubmit = ({login , password}) => {
        
        server.auth(login, password)
        .then(({error, res}) => {
            if(error) {
                setServerError(`Ошибка запроса ${error}`);
                return
            }
              dispatch(setUser(res));
              sessionStorage.setItem('userData', JSON.stringify(res));
        });


    }

    const formError = errors?.login?.message || errors?.password?.message;
    const errorMessage =  formError || serverError; 


    if(role !== ROLE.GUEST) {
        return <Navigate to = "/"/>
    }


    return (
        <div className={className}>
         <h2>Авторизация</h2>
         <AuthForm onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" 
            placeholder="Логин" 
            {...register("login",{
                onChange: () => setServerError(null) 
            })} />
            <Input type="password" 
            placeholder="Пароль" 
            {...register("password",{
                onChange: () => setServerError(null) 
            })} />
            <Button type="submit" disabled={!!formError} >Войти  <i className="fa fa-sign-in"/></Button>
            {errorMessage && <ErrorMassage>{errorMessage}</ErrorMassage>}
            <Button><Link to="/register">Регистрация <i className="fa fa-user-plus"/></Link></Button>
            
         </AuthForm>

        </div>
    )
}
export const Auth = styled(AuthContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`