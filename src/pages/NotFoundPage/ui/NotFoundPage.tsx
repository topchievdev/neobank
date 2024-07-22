import { useNavigate } from 'react-router-dom'
import notFoundPageImage from '@/shared/assets/img/404img.png'
import { Button } from '@/shared/ui'
import '@/app/styles/index.scss'
import './NotFoundPage.scss'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <main className="not-found page">
      <div className="not-found__wrapper">
        <h2 className="not-found__message">Oops....</h2>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__info">
          This Page doesn`t exist or was removed! We suggest you go back.
        </p>
        <Button className="not-found__button" onClick={goBack}>
          Go back
        </Button>
      </div>
      <img className='not-found__img' src={notFoundPageImage} alt="Page not Found" />
    </main>
  )
}

export default NotFoundPage
