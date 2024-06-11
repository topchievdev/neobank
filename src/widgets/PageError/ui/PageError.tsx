import errorImg from '@/shared/assets/img/Oops-error.png'
import './PageError.scss'

export const PageError = () => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <main className="error">
      <img className="error__img" src={errorImg} alt="Error Image" />
      <h1 className="error__title">Something went wrong!</h1>
      <button className="error__button" onClick={reloadPage} type="button">
        Refresh the page
      </button>
    </main>
  )
}
