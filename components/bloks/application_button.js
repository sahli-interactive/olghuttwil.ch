import { storyblokEditable } from "@storyblok/react"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faXmark } from "@fortawesome/pro-regular-svg-icons"
import dayjs from 'dayjs'
import 'dayjs/locale/de'
import RichTextRenderer from "../helpers/rich-text-renderer"

const textFields = [
  { name: 'firstName', label: 'Vorname', placeholder: 'Vanessa', className: 'col-span-3' },
  { name: 'lastName', label: 'Nachname', placeholder: 'Muster', className: 'col-span-3' },
  { name: 'phoneNumber', type: 'tel', label: 'Telefonnummer', placeholder: '+41 00 000 00 00', className: 'col-span-3' },
  { name: 'email', type: 'email', label: 'E-Mail', placeholder: 'vanessa@muster.ch', className: 'col-span-3' },
  { name: 'birthDate', type: 'date', label: 'Geburtsdatum', placeholder: '01.01.1970', className: 'col-span-2' },
  { name: 'street', label: 'Strasse und Hausnummer', placeholder: 'Musterstrasse 5' },
  { name: 'zipCode', label: 'PLZ', placeholder: '3000', className: 'col-span-2' },
  { name: 'city', label: 'Ort', placeholder: 'Bern', className: 'col-span-4' },
  { name: 'siCard', label: 'SI-Card-Nummer', placeholder: '', required: false, className: 'col-span-3' },
  { name: 'solv', label: 'SOLV-Nummer', placeholder: '', required: false, className: 'col-span-3' },
]

function TextField({ name, label, placeholder, type, className, register, errors, required, defaultValue }) {
  return (
    <div className={`form-control ${className ? className : 'col-span-full'}`}>
      <label htmlFor={name} className={required ? '' : 'after:content-["_(optional)"]'}>{label}</label>
      <input
        id={name}
        placeholder={placeholder}
        type={type || 'text'}
        defaultValue={defaultValue}
        className={errors[name] && 'border-2 border-red-700'}
        {...register(name, {
          required: required ? 'Dieses Feld muss ausgefüllt sein' : false,
          validate: (value) => {
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/gm.test(value) || 'Diese Eingabe entspricht nicht dem verlangten Format.'
          }
        })}
      />
      {errors[name] && <p className="mt-1 text-sm text-red-700">{errors[name].message}</p>}
    </div>
  )
}

function ApplicationFormOverlay({ isOpen, setIsOpen, blok }) {
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()

  function encode(data) {
    return Object.keys(data).map(key => (
      encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    )).join('&')
  }

  function onSubmit(formData) {
    formData.occasionDate = dayjs(formData.occasionDate).locale('de-ch').format('dd, DD.MM.YYYY')
    console.log(formData)
    fetch("/favicon.ico", {
      body: encode({
        'form-name': 'application',
        ...formData,
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
    })
      .then(() => setIsSuccess(true))
      .catch((error) => alert(error))
  }

  return (
    <Dialog
      open={isOpen !== null}
      onClose={() => setIsOpen(null)}
      className="relative z-50"
    >
      <Dialog.Backdrop className="fixed inset-0 bg-black/40 z-10" />
      <div className="fixed inset-0 flex items-start justify-center p-8 overflow-auto">
        <Dialog.Panel className="p-12 bg-gray-100 rounded-50 w-full max-w-3xl">
          <div className="mb-6">
            {blok.form_headline && <h2 className="mb-4">{blok.form_headline}</h2>}
            {blok.form_text && (
              <div className="richtext columns-2">
                <RichTextRenderer text={blok.form_text} />
              </div>
            )}
          </div>
          {!isSuccess ? (
            <form name="application" onSubmit={handleSubmit(onSubmit)} data-netlify="true" className="grid grid-cols-6 gap-x-5 gap-y-4">
              <input type="hidden" name="form-name" value="application" />
              {textFields.map((field, index) => (
                <TextField
                  key={index}
                  name={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  type={field.type}
                  register={register}
                  errors={errors}
                  required={field.required === false ? false : true}
                  className={field.className}
                />
              ))}
              <div className="col-span-full flex justify-end gap-3">
                <button onClick={() => setIsOpen(null)} className="btn btn-secondary">
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {blok.label}
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-12 gap-2">
              <FontAwesomeIcon icon={faThumbsUp} className="h-8 col-start-1 text-green-700" />
              <h3 className="text-green-700 col-start-2 col-span-8">Bestellung versendet!</h3>
              <div className="col-span-2 col-start-12 p-2">
                <button onClick={() => setIsOpen(false)} className="relative">
                  <span className="sr-only">Schliessen</span>
                  <FontAwesomeIcon icon={faXmark} className="h-6" />
                </button></div>
              <p className=" font-sm col-start-2">Sie werden bald von uns per E-Mail kontaktiert.</p>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

function ApplicationButton({ blok }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="self-start px-6 py-4 rounded-full inline-flex font-semibold text-white bg-blue-700 hover:bg-blue-500"
        {...storyblokEditable(blok)}
      >
        {blok.label}
      </button>
      {isOpen && <ApplicationFormOverlay isOpen={isOpen} setIsOpen={setIsOpen} blok={blok} />}
    </>
  )
}

export default ApplicationButton