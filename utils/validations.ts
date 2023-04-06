export const isValidEmail = (email: string): boolean => {
  
    const match = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  
      return !!match;
  };
  

  export const isValidIdentityCard = (identityCard: string): boolean => {
  
    const match = String(identityCard)
        .toLowerCase()
        .match(
          /^[0-9]{10}\S*$/
        );
  
      return !!match;
  };


  export const isValidNameOrLastName = (text: string): boolean => {
  
    const match = String(text)
        .toLowerCase()
        .match(
          /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'°]+\s{0,1}[A-ZÑa-zñáéíóúÁÉÍÓÚ'°]+$/ 
        );
  
      return !!match;
  };

  export const isEmail = (email: string): string | undefined => {
    return isValidEmail(email) 
      ? undefined
      : 'The email entered does not have a valid format';
  }


  export const isIdentityCard = (identityCard: string): string | undefined => {
    return isValidIdentityCard(identityCard) 
      ? undefined
      : 'The identity cart must contains only numbers';
  }

  export const isNameOrLastName = (text: string): string | undefined => {
    return isValidNameOrLastName(text) 
      ? undefined
      : 'Numbers and special characters are not allowed in this field';
  }
