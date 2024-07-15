import { SubmitHandler, useForm } from 'react-hook-form'
import { useSendPrescoringData } from '../model/hooks/useSendPrescoringData'
import { formValidate } from '@/shared/lib/utils/formValidate'
import { Button, Input, Loader, Select } from '@/shared/ui'
import { IPrescoringData } from '../model/types/prescoring'
import { regex } from '@/shared/const/regex'
import './PrescoringForm.scss'

export const PrescoringForm = () => {
  const { sendData, resetError, data, error, isLoading } = useSendPrescoringData()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, dirtyFields },
    watch
  } = useForm<IPrescoringData>({
    mode: 'all',
    defaultValues: {
      amount: 150000
    }
  })

  const amountField = watch('amount')

  const onSubmit: SubmitHandler<IPrescoringData> = (data) => {
    sendData(data)
  }

  if (isLoading) {
    return (
      <div className="prescoring-form prescoring-form__loading">
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="prescoring-form prescoring-form__error">
        <p>{error}</p>
        <Button theme="error" onClick={() => resetError()}>
          Try again
        </Button>
      </div>
    )
  }

  if (data) {
    return (
      <div className="prescoring-form__data">
        <p>{data}</p>
      </div>
    )
  }

  return (
    <form
      className="prescoring-form"
      onSubmit={handleSubmit(onSubmit)}
      id="prescoring-form"
    >
      <div className="prescoring-form__amount-wrapper">
        <div className="prescoring-form__select-wrapper">
          <div className="prescoring-form__select-header">
            <h3 className="prescoring-form__title">Customize your card</h3>
            <p className="prescoring-form__step">Step 1 of 5</p>
          </div>
          <div className="prescoring-form__select">
            <Input
              className="prescoring-form__range"
              label="Select Amount"
              type="range"
              min={15000}
              max={600000}
              {...register('amount')}
            />
          </div>
        </div>
        <div className="prescoring-form__total-wrapper">
          <h4 className="prescoring-form__amount-title">
            You have chosen the amount
          </h4>
          <p className="prescoring-form__amount">{amountField}</p>
        </div>
      </div>
      <div className="prescoring-form__contact-info">
        <h4 className="prescoring-form__contact-title">Contact Information</h4>
        <div className="prescoring-form__contact-items">
          <Input
            placeholder="For Example Doe"
            label="Your last name"
            error={errors['lastName']?.message}
            isDirty={dirtyFields['lastName']}
            isSubmitted={isSubmitted}
            required
            {...register('lastName', {
              required: 'Enter your last name'
            })}
          />
          <Input
            placeholder="For Example Doe"
            label="Your first name"
            error={errors['firstName']?.message}
            isDirty={dirtyFields['firstName']}
            isSubmitted={isSubmitted}
            required
            {...register('firstName', {
              required: 'Enter your first name'
            })}
          />
          <Input
            placeholder="For Example Victorovich"
            label="Your patronymic"
            {...register('middleName')}
          />
          <Select
            label="Select term"
            required
            options={[
              { value: 6, content: '6 month' },
              { value: 12, content: '12 month' },
              { value: 18, content: '18 month' },
              { value: 24, content: '24 month' }
            ]}
            {...register('term')}
          />
          <Input
            placeholder="test@gmail.com"
            label="Your email"
            error={errors['email']?.message}
            isDirty={dirtyFields['email']}
            isSubmitted={isSubmitted}
            required
            {...register('email', {
              required: 'Incorrect email address',
              pattern: {
                value: regex.email,
                message: 'Incorrect email address'
              }
            })}
          />
          <Input
            placeholder="Select Date and Time"
            label="Your date of birth"
            error={errors['birthdate']?.message}
            isDirty={dirtyFields['birthdate']}
            isSubmitted={isSubmitted}
            type="date"
            required
            {...register('birthdate', {
              required: 'Incorrect date of birth',
              validate: (value) => formValidate.age(value)
            })}
          />
          <Input
            placeholder="0000"
            label="Your passport series"
            error={errors['passportSeries']?.message}
            isDirty={dirtyFields['passportSeries']}
            isSubmitted={isSubmitted}
            maxLength={4}
            required
            {...register('passportSeries', {
              required: 'The series must be 4 digits',
              minLength: { value: 4, message: 'The series must be 4 digits' },
              pattern: {
                value: regex.digits,
                message: 'Please enter only digits'
              }
            })}
          />
          <Input
            placeholder="000000"
            label="Your passport number"
            error={errors['passportNumber']?.message}
            isDirty={dirtyFields['passportNumber']}
            isSubmitted={isSubmitted}
            maxLength={6}
            required
            {...register('passportNumber', {
              required: 'The series must be 6 digits',
              minLength: { value: 6, message: 'The series must be 6 digits' },
              pattern: {
                value: regex.digits,
                message: 'Please enter only digits'
              }
            })}
          />
        </div>
      </div>
      <Button className="prescoring-form__button" type="submit">
        Continue
      </Button>
    </form>
  )
}
