
export const sanitizeContent = (content) => 
    content
      .replaceAll("<div><br></div>", "\n")
      .replaceAll("<div>", "\n")
      .replaceAll("</div>", " ")
      .replaceAll(/&nbsp;|&amp;nbsp;/g, " ")   
      .replaceAll(/&amp;/g, "&");              
  