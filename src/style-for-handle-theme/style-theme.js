export const handleThemeBody = (theme) => {
  const body = document.getElementsByTagName('body');
  if(theme === 'dark'){
    body[0].classList.remove('body-dark');
    body[0].classList.remove('body-light');
    body[0].classList.remove('body-origin');
    body[0].classList.add('body-dark');
  }
  if(theme === 'light'){
    body[0].classList.remove('body-light')
    body[0].classList.remove('body-dark')
    body[0].classList.remove('body-origin')
    body[0].classList.add('body-light')
  }
  if(theme === 'origin'){
    body[0].classList.remove('body-light')
    body[0].classList.remove('body-dark')
    body[0].classList.remove('body-origin')
    body[0].classList.add('body-origin')
    }
  }


