var numUniqueEmails = function(emails) {
    let uniqueEmails = [];
    
    emails.forEach( email => {
        let domainIndex;
        let currentEmail = "";
        let atSign = email.indexOf("@")
        let domain = email.slice(atSign);
        if (email.indexOf("+") > -1) {
            domainIndex = email.indexOf("+");
        } else {
            domainIndex = atSign;
        }
        for (let i = 0; i < domainIndex; i++){
            if (email[i] != "."){
                currentEmail += email[i];
            }
        }
        let finalEmail = currentEmail += domain;
        if (!uniqueEmails.includes(finalEmail)) uniqueEmails.push(finalEmail);
    });
    return uniqueEmails.length;
      
  };