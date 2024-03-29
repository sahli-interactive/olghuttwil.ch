import { useContext, useState } from "react"
import { Dialog } from "@headlessui/react"
import { useForm } from "react-hook-form"
import { MapsContext } from "../../pages/[...slug]"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faThumbsUp, faXmark } from "@fortawesome/pro-regular-svg-icons"
import dayjs from 'dayjs'
import 'dayjs/locale/de'

const textFields = [
	{ name: 'firstName', label: 'Vorname', placeholder: 'Vanessa', className: 'col-span-6 md:col-span-3' },
	{ name: 'lastName', label: 'Nachname', placeholder: 'Muster', className: 'col-span-6 md:col-span-3' },
	{ name: 'phoneNumber', type: 'tel', label: 'Telefonnummer', placeholder: '+41 00 000 00 00' },
	{ name: 'email', type: 'email', label: 'E-Mail', placeholder: 'vanessa@muster.ch' },
	{ name: 'street', label: 'Strasse und Hausnummer', placeholder: 'Musterstrasse 5' },
	{ name: 'zipCode', label: 'PLZ', placeholder: '3000', className: 'col-span-6 md:col-span-2' },
	{ name: 'city', label: 'Ort', placeholder: 'Bern', className: 'col-span-6 md:col-span-4' },
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


function MapFormOverlay({ isOpen, setIsOpen, blok }) {
	const [isSuccess, setIsSuccess] = useState(false)
	const [format, setFormat] = useState('print')

	const { register, handleSubmit, formState: { errors } } = useForm()

	const maps = useContext(MapsContext)
	const formatLabels = {'print': 'Ausdruck (Postversand)', 'ocadFile': 'OCAD-File (Download)'}

	function handleChange(event) {
		setFormat(event.target.value)
	}

	function encode(data) {
		return Object.keys(data).map(key => (
			encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
		)).join('&')
	}

	function onSubmit(formData) {
		formData.occasionDate = dayjs(formData.occasionDate).locale('de-ch').format('dd, DD.MM.YYYY')
		fetch("/favicon.ico", {
			body: encode({
				'form-name': 'map-order',
				format: formatLabels[format],
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
				<Dialog.Panel className="p-8 bg-gray-100 rounded-50 w-full max-w-xl">
					{!isSuccess ? (
						<form name="map-order" onSubmit={handleSubmit(onSubmit)} data-netlify="true">
							<input type="hidden" name="form-name" value="map-order" />
							<ol>
								<li className="grid grid-cols-6 gap-x-5 gap-y-4 mb-6">
									<h2 className="h3 col-span-full">1. Kartenbestellung</h2>
									<div className="form-control col-span-full">
										<label htmlFor="map">Karte</label>
										<select defaultValue={blok.headline} {...register("map")}>
											{maps.content.body.find(blok => blok.component === 'product_grid').products?.map((product, index) => (
												<option key={index} value={product.headline}>{product.headline}</option>
											))}
										</select>
										<FontAwesomeIcon icon={faAngleDown} className="-ml-10" />
									</div>
									<TextField
										name="amount"
										label="Anzahl"
										placeholder="1"
										type="number"
										register={register}
										errors={errors}
										className="col-span-full md:col-span-2"
										defaultValue="1"
										required={true}
									/>
									<fieldset className="form-control radio-group col-span-full md:col-span-3 md:col-start-4">
										<legend>Format</legend>
										<label>
											<input type="radio" name="format" value="print" onChange={handleChange} checked={format === 'print' ? true : false} />
											<span>{formatLabels['print']}</span>
										</label>
										<label>
											<input type="radio" name="format" value="ocadFile" onChange={handleChange} checked={format === 'ocadFile' ? true : false} />
											<span>{formatLabels['ocadFile']}</span>
										</label>
									</fieldset>
									<TextField
										name="occasion"
										label="Anlass"
										placeholder="sCOOL-OL"
										type="text"
										register={register}
										errors={errors}
									/>
									<TextField
										name="occasionDate"
										label="Datum Anlass"
										placeholder="5"
										type="date"
										register={register}
										errors={errors}
									/>
								</li>
								<li className="grid grid-cols-6 gap-x-5 gap-y-4 mb-6">
									<h2 className="h3 col-span-full">2. Rechnungsadresse</h2>
									{textFields.map((field, index) => (
										<TextField
											key={index}
											name={field.name}
											label={field.label}
											placeholder={field.placeholder}
											type={field.type}
											register={register}
											errors={errors}
											required={true}
											className={field.className}
										/>
									))}
								</li>
							</ol>
							<div className="col-span-full flex flex-wrap justify-end gap-3">
								<button onClick={() => setIsOpen(null)} className="btn btn-secondary w-full md:w-fit">
									Abbrechen
								</button>
								<button
									type="submit"
									className="btn btn-primary w-full md:w-fit"
								>
									Karte bestellen
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

export default MapFormOverlay