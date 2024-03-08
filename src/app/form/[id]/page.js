'use client'

import React, { useEffect, useState } from 'react'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'

export default function Form({ params }) {
    const [formState, setFormState] = useState({
        customerName: '',
        phoneNumber: '',
        websiteName: '',
        description: '',
        type: '',
        typeCustom: '',
        task1: false,
        task2: false,
        task3: false,
        task4: false,
        task5: false,
        taskCustom: '',
        user1: false,
        user2: false,
        age1: false,
        age2: false,
        age3: false,
        age4: false,
        age5: false,
        region1: false,
        region2: false,
        region3: false,
        region4: false,
        region5: false,
        region6: false,
        region7: false,
        region8: false,
        regionCustom: '',
        userIdeal: '',
        businessFeatures: '',
        businessGrowthPoints: '',
        likedWebsites: '',
        whatLiked1: false,
        whatLiked2: false,
        whatLiked3: false,
        whatLiked4: false,
        whatLikedCustom: '',
        designPreferences: '',
        designMood1: false,
        designMood2: false,
        designMood3: false,
        designMood4: false,
        designMood5: false,
        designMood6: false,
        designMood7: false,
        designMood8: false,
        designMoodCustom: '',
        brandbook: '',
        brandbookMatch: '',
        features: '',
        pages1: false,
        pages2: false,
        pages3: false,
        pages4: false,
        pages5: false,
        pages6: false,
        pages7: false,
        pages8: false,
        pages9: false,
        pages10: false,
        pagesCustom: '',
        additionalFeatures1: false,
        additionalFeatures2: false,
        additionalFeatures3: false,
        additionalFeatures4: false,
        additionalFeatures5: false,
        additionalFeatures6: false,
        additionalFeaturesCustom: '',
        homepageContent: '',
        contentFilling: '',
        advertising: '',
        seoOptimization: '',
        domain: '',
        support: '',
        deadline: '',
        budget: '',
    })

    const names = {
        customerName: "Ім'я користувача",
        phoneNumber: 'Мобільний користувача',
        websiteName: 'Назва веб-сайту',
        description: 'Опис',
        type: 'Тип',
        typeCustom: 'Тип (кастомний)',
        task1: 'Завдання: Розробка унікального дизайну та впровадження трендів дизайну',
        task2: 'Завдання: Реалізація багатомовності та локалізація',
        task3: 'Завдання: Розробка потужної системи управління контентом з нуля',
        task4: 'Завдання: Реалізація адаптивності та мобільної версії',
        task5: 'Завдання: Забезпечення максимального захисту від хакерських атак',
        taskCustom: 'Завдання (кастомне)',
        user1: 'Демографія: Чоловік',
        user2: 'Демографія: Жінка',
        age1: 'Демографія: молодше 12 років',
        age2: 'Демографія: 12-18 років',
        age3: 'Демографія: 18-32 роки',
        age4: 'Демографія: 32-52 роки',
        age5: 'Демографія: старше 52 років',
        region1: 'Демографія: Україна (Локальний користувач)',
        region2: 'Демографія: Європа',
        region3: 'Демографія: Північна Америка',
        region4: 'Демографія: Південна Америка',
        region5: 'Демографія: Західна Азія',
        region6: 'Демографія: Східна Азія',
        region7: 'Демографія: Океанія',
        region8: 'Демографія: Африка',
        regionCustom: 'Регіон (кастомний)',
        userIdeal: 'Ідеальний користувач',
        businessFeatures: 'Особливості бізнесу',
        businessGrowthPoints: 'Точки росту бізнесу',
        likedWebsites: 'Сайти, які сподобалися',
        whatLiked1: 'Що сподобалось: Дизайн',
        whatLiked2: 'Що сподобалось: Кольори',
        whatLiked3: 'Що сподобалось: Шрифти',
        whatLiked4: 'Що сподобалось: Функціонал',
        whatLikedCustom: 'Що сподобалось (кастомний)',
        designPreferences: 'Вподобання щодо дизайну',
        designMood1: 'Дизайн: Суворий корпоративний',
        designMood2: 'Дизайн: Яскравий веселий',
        designMood3: 'Дизайн: Виразний артистичний',
        designMood4: 'Дизайн: Мінімалістичний',
        designMood5: 'Дизайн: Стриманий з акцентом на функціональність',
        designMood6: 'Дизайн: Переважає текст',
        designMood7: 'Дизайн: Переважають зображення',
        designMood8: 'Дизайн: Переважають відео та анімації',
        designMoodCustom: 'Настрій дизайну (кастомний)',
        brandbook: 'Є брендбук',
        brandbookMatch: 'Відповідність брендбуку',
        features: 'Можливості',
        pages1: 'Сторінки: Про нас',
        pages2: 'Сторінки: Контакти',
        pages3: 'Сторінки: Новини',
        pages4: 'Сторінки: Блог',
        pages5: 'Сторінки: Послуги',
        pages6: 'Сторінки: Продукція',
        pages7: 'Сторінки: Партнери',
        pages8: "Сторінки: Кар'єра",
        pages9: 'Сторінки: Галерея',
        pages10: 'Сторінки: Портфоліо',
        pagesCustom: 'Сторінки (кастомні)',
        additionalFeatures1: "Функції: Форма зворотнього зв'язку",
        additionalFeatures2: 'Функції: Чат-бот',
        additionalFeatures3: 'Функції: Попап',
        additionalFeatures4: 'Функції: Відгуки',
        additionalFeatures5: 'Функції: Підписка на новини',
        additionalFeatures6: 'Функції: Інтеграція з соцмережами',
        additionalFeaturesCustom: 'Додаткові функції (кастомні)',
        homepageContent: 'Що має бути на головній сторінці',
        contentFilling: 'Наповнення контентом',
        advertising: 'Просування',
        seoOptimization: 'SEO оптимізація',
        domain: 'Чи є домен',
        support: 'Підтримка',
        deadline: 'Термін виконання',
        budget: 'Бюджет',
        createdAt: 'Дата створення',
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [id, setId] = useState(params.id)

    useEffect(() => {
        const username = sessionStorage.getItem('username')
        const password = sessionStorage.getItem('password')

        if (username && password) {
            setUsername(username)
            setPassword(password)
        }
    }, [])

    useEffect(() => {
        if (username && password) {
            fetchForm()
        }
    }, [username, password])

    const fetchForm = async () => {
        const response = await fetch('/api/getForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                id: params.id,
            }),
        })

        if (response.ok) {
            const data = await response.json()
            setFormState(data.data)
        } else {
            const error = await response.json()
            alert(error.message)
        }
    }

    const handleChangeEditMode = e => {
        setEditMode(e.target.checked)
    }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangeCheckbox = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.checked,
        })
    }

    const handleChangeTypeCustom = e => {
        setFormState({
            ...formState,
            type: '',
            typeCustom: e.target.value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const response = await fetch('/api/updateForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, id, formState }),
        })

        const data = await response.json()

        if (data.success) {
            alert('Форма успішно оновлена')
        } else {
            alert('Виникла помилка при оновленні форми', data.message)
        }
    }

    const handleDelete = async () => {
        const response = await fetch('/api/deleteForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, id }),
        })

        const data = await response.json()

        if (data.success) {
            window.location.href = '/admin'
        } else {
            alert('Виникла помилка при видаленні форми', data.message)
        }
    }

    const handleDownloadPdf = async () => {
        const pdf = await PDFDocument.create()

        const url = '/OpenSans-VariableFont_wdth,wght.ttf'
        const fontBytes = await fetch(url).then(res => res.arrayBuffer())
        pdf.registerFontkit(fontkit)
        const font = await pdf.embedFont(fontBytes)

        let page = pdf.addPage()
        const { width, height } = page.getSize()
        const fontSize = 9

        let currentY = height - 4 * fontSize

        page.drawText('Форма', {
            x: 50,
            y: currentY,
            size: fontSize,
            font: font,
            color: rgb(0, 0, 0),
        })

        const MAX_LINES_PER_PAGE = 90
        let linesCount = 0
        let previousLineHeight = 1

        Object.entries(formState).forEach(([key, value]) => {
            if (linesCount >= MAX_LINES_PER_PAGE) {
                const newPage = pdf.addPage()
                currentY = height - 4 * fontSize
                linesCount = 0
                page = newPage
            }

            currentY -= fontSize * previousLineHeight
            linesCount++

            let text = `${names[key]}: ${value}`
            previousLineHeight = Math.round(text.length / 100)
            if (previousLineHeight <= 1) {
                previousLineHeight = 1

                page.drawText(text, {
                    x: 50,
                    y: currentY,
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                })
            } else {
                const chunks = text.match(/.{1,100}/g)
                chunks.forEach((chunk, index) => {
                    page.drawText(chunk, {
                        x: 50,
                        y: currentY - index * fontSize,
                        size: fontSize,
                        font: font,
                        color: rgb(0, 0, 0),
                    })
                })
            }
        })

        const pdfBytes = await pdf.save()

        const blob = new Blob([pdfBytes], { type: 'application/pdf' })
        const blobUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = blobUrl
        link.download = 'output.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="sm:mx-6 lg:mx-64 2xl:mx-96 my-6 mx-6">
            <h1 className="text-3xl font-bold text-white pb-12">
                Форма {params.id}
            </h1>
            <div className="mb-12">
                <input
                    type="checkbox"
                    id="editMode"
                    name="editMode"
                    value={editMode}
                    onChange={handleChangeEditMode}
                />
                <label htmlFor="editMode" className="ml-2 text-sm text-white">
                    Режим редагування
                </label>
                <button
                    onClick={handleDownloadPdf}
                    className="ml-12 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Зберегти як pdf
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Контактні дані
                    </div>
                    <div>
                        <label
                            htmlFor="customerName"
                            className="block text-sm font-medium text-white">
                            Ім'я
                        </label>
                        <input
                            id="customerName"
                            name="customerName"
                            type="text"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                            value={formState.customerName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-medium text-white">
                            Номер телефону для зв'язку
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Загальні відомості
                    </div>
                    <div>
                        <label
                            htmlFor="websiteName"
                            className="block text-sm font-medium text-white">
                            Назва веб-сайту
                        </label>
                        <input
                            id="websiteName"
                            name="websiteName"
                            type="text"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                            value={formState.websiteName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="type"
                            className="block text-sm font-medium text-white">
                            Тип веб-сайту
                        </label>
                        <textarea
                            id="type"
                            name="type"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.type}
                            onChange={handleChange}
                        />
                        <div className="mt-1">
                            <label
                                htmlFor="typeCustom"
                                className="block text-sm font-medium text-white">
                                Кастомний тип веб-сайту
                            </label>
                            <textarea
                                id="typeCustom"
                                name="typeCustom"
                                disabled={!editMode}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formState.typeCustom}
                                onChange={handleChangeTypeCustom}
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-white">
                            Суть та мета веб-сайту
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="tasks"
                            className="block text-sm font-medium text-white">
                            На яких завданнях потрібно сфокусуватись при
                            розробці (оберіть декілька, якщо потрібно)
                        </label>
                        <div
                            id="tasks"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="task1"
                                    name="task1"
                                    disabled={!editMode}
                                    checked={formState.task1}
                                    value={formState.task1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="task1"
                                    className="ml-2 text-sm text-white">
                                    Розробка унікального дизайну та впровадження
                                    трендів дизайну
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="task2"
                                    name="task2"
                                    disabled={!editMode}
                                    checked={formState.task2}
                                    value={formState.task2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="task2"
                                    className="ml-2 text-sm text-white">
                                    Реалізація багатомовності та локалізація
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="task3"
                                    name="task3"
                                    disabled={!editMode}
                                    checked={formState.task3}
                                    value={formState.task3}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="task3"
                                    className="ml-2 text-sm text-white">
                                    Розробка потужної системи управління
                                    контентом з нуля
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="task4"
                                    name="task4"
                                    disabled={!editMode}
                                    checked={formState.task4}
                                    value={formState.task4}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="task4"
                                    className="ml-2 text-sm text-white">
                                    Реалізація адаптивності та мобільної версії
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="task5"
                                    name="task5"
                                    disabled={!editMode}
                                    checked={formState.task5}
                                    value={formState.task5}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="task5"
                                    className="ml-2 text-sm text-white">
                                    Забезпечення максимального захисту від
                                    хакерських атак
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="taskCustom"
                                    className="block text-sm font-medium text-white">
                                    Ваш варіант
                                </label>
                                <textarea
                                    id="taskCustom"
                                    name="taskCustom"
                                    disabled={!editMode}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formState.taskCustom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Цільова аудиторія
                    </div>
                    <div>
                        <label
                            htmlFor="users"
                            className="block text-sm font-medium text-white">
                            Цільовий користувач (користувачі)
                        </label>
                        <div
                            id="users"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="user1"
                                    name="user1"
                                    disabled={!editMode}
                                    checked={formState.user1}
                                    value={formState.user1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="user1"
                                    className="ml-2 text-sm text-white">
                                    Чоловік
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="user2"
                                    name="user2"
                                    disabled={!editMode}
                                    checked={formState.user2}
                                    value={formState.user2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="user2"
                                    className="ml-2 text-sm text-white">
                                    Жінка
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="ages"
                            className="block text-sm font-medium text-white">
                            Вік цільового користувача
                        </label>
                        <div
                            id="ages"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="age1"
                                    name="age1"
                                    disabled={!editMode}
                                    checked={formState.age1}
                                    value={formState.age1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="age1"
                                    className="ml-2 text-sm text-white">
                                    молодше 12 років
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="age2"
                                    name="age2"
                                    disabled={!editMode}
                                    checked={formState.age2}
                                    value={formState.age2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="age2"
                                    className="ml-2 text-sm text-white">
                                    12-18 років
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="age3"
                                    name="age3"
                                    disabled={!editMode}
                                    checked={formState.age3}
                                    value={formState.age3}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="age3"
                                    className="ml-2 text-sm text-white">
                                    18-32 роки
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="age4"
                                    name="age4"
                                    disabled={!editMode}
                                    checked={formState.age4}
                                    value={formState.age4}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="age4"
                                    className="ml-2 text-sm text-white">
                                    32-52 роки
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="age5"
                                    name="age5"
                                    disabled={!editMode}
                                    checked={formState.age5}
                                    value={formState.age5}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="age5"
                                    className="ml-2 text-sm text-white">
                                    старше 52 років
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="regions"
                            className="block text-sm font-medium text-white">
                            Регіони користувачів
                        </label>
                        <div
                            id="regions"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="region1"
                                    name="region1"
                                    disabled={!editMode}
                                    checked={formState.region1}
                                    value={formState.region1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region1"
                                    className="ml-2 text-sm text-white">
                                    Україна (Локальний користувач)
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="region2"
                                    name="region2"
                                    disabled={!editMode}
                                    checked={formState.region2}
                                    value={formState.region2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region2"
                                    className="ml-2 text-sm text-white">
                                    Європа
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="region3"
                                    name="region3"
                                    disabled={!editMode}
                                    checked={formState.region3}
                                    value={formState.region3}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region3"
                                    className="ml-2 text-sm text-white">
                                    Північна Америка
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="region4"
                                    name="region4"
                                    disabled={!editMode}
                                    checked={formState.region4}
                                    value={formState.region4}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region4"
                                    className="ml-2 text-sm text-white">
                                    Південна Америка
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="region5"
                                    name="region5"
                                    disabled={!editMode}
                                    checked={formState.region5}
                                    value={formState.region5}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region5"
                                    className="ml-2 text-sm text-white">
                                    Західна Азія
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="region6"
                                    name="region6"
                                    disabled={!editMode}
                                    checked={formState.region6}
                                    value={formState.region6}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region6"
                                    className="ml-2 text-sm text-white">
                                    Східна Азія
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="region7"
                                    name="region7"
                                    disabled={!editMode}
                                    checked={formState.region7}
                                    value={formState.region7}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region7"
                                    className="ml-2 text-sm text-white">
                                    Океанія
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="region8"
                                    name="region8"
                                    disabled={!editMode}
                                    checked={formState.region8}
                                    value={formState.region8}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="region8"
                                    className="ml-2 text-sm text-white">
                                    Африка
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="regionCustom"
                                    className="block text-sm font-medium text-white">
                                    Ваш варіант або уточнення
                                </label>
                                <textarea
                                    id="regionCustom"
                                    name="regionCustom"
                                    disabled={!editMode}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formState.regionCustom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="userIdeal"
                            className="block text-sm font-medium text-white">
                            Опишіть ідеального користувача вашого веб-сайту
                            (Інтереси, потреби, мотиви, рід занять)
                        </label>
                        <textarea
                            id="userIdeal"
                            name="userIdeal"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.userIdeal}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Особливості бізнесу
                    </div>
                    <div>
                        <label
                            htmlFor="businessFeatures"
                            className="block text-sm font-medium text-white">
                            Опишіть особливості бізнес-ніші, в якій ви працюєте
                        </label>
                        <textarea
                            id="businessFeatures"
                            name="businessFeatures"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.businessFeatures}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="businessGrowthPoints"
                            className="block text-sm font-medium text-white">
                            Розкажіть про точки зростання вашого бізнесу
                        </label>
                        <textarea
                            id="businessGrowthPoints"
                            name="businessGrowthPoints"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.businessGrowthPoints}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Конкуренти
                    </div>
                    <div>
                        <label
                            htmlFor="likedWebsites"
                            className="block text-sm font-medium text-white">
                            Наведіть приклади сайтів конкурентів, які вам
                            подобаються
                        </label>
                        <textarea
                            id="likedWebsites"
                            name="likedWebsites"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.likedWebsites}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="whatLiked"
                            className="block text-sm font-medium text-white">
                            Що вам подобається в цих сайтах?
                        </label>
                        <div
                            id="whatLiked"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="whatLiked1"
                                    name="whatLiked1"
                                    disabled={!editMode}
                                    checked={formState.whatLiked1}
                                    value={formState.whatLiked1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="whatLiked1"
                                    className="ml-2 text-sm text-white">
                                    Дизайн
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="whatLiked2"
                                    name="whatLiked2"
                                    disabled={!editMode}
                                    checked={formState.whatLiked2}
                                    value={formState.whatLiked2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="whatLiked2"
                                    className="ml-2 text-sm text-white">
                                    Функціонал
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="whatLiked3"
                                    name="whatLiked3"
                                    disabled={!editMode}
                                    checked={formState.whatLiked3}
                                    value={formState.whatLiked3}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="whatLiked3"
                                    className="ml-2 text-sm text-white">
                                    Структура
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="whatLiked4"
                                    name="whatLiked4"
                                    disabled={!editMode}
                                    checked={formState.whatLiked4}
                                    value={formState.whatLiked4}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="whatLiked4"
                                    className="ml-2 text-sm text-white">
                                    Навігація
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="whatLikedCustom"
                                    className="block text-sm font-medium text-white">
                                    Ваш варіант
                                </label>
                                <textarea
                                    id="whatLikedCustom"
                                    name="whatLikedCustom"
                                    disabled={!editMode}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formState.whatLikedCustom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Дизайн
                    </div>
                    <div>
                        <label
                            htmlFor="designPreferences"
                            className="block text-sm font-medium text-white">
                            Наведіть конкретні побажання щодо кольору, шрифтів,
                            типів зображень, тощо
                        </label>
                        <textarea
                            id="designPreferences"
                            name="designPreferences"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.designPreferences}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="designMood"
                            className="block text-sm font-medium text-white">
                            Який настрій має викликати дизайн веб-сайту?
                        </label>
                        <div
                            id="designMood"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood1"
                                    name="designMood1"
                                    disabled={!editMode}
                                    checked={formState.designMood1}
                                    value={formState.designMood1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood1"
                                    className="ml-2 text-sm text-white">
                                    Суворий корпоративний стиль
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood2"
                                    name="designMood2"
                                    disabled={!editMode}
                                    checked={formState.designMood2}
                                    value={formState.designMood2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood2"
                                    className="ml-2 text-sm text-white">
                                    Яскравий та веселий стиль
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood3"
                                    name="designMood3"
                                    disabled={!editMode}
                                    checked={formState.designMood3}
                                    value={formState.designMood3}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood3"
                                    className="ml-2 text-sm text-white">
                                    Виразний та артистичний стиль
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood4"
                                    name="designMood4"
                                    disabled={!editMode}
                                    checked={formState.designMood4}
                                    value={formState.designMood4}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood4"
                                    className="ml-2 text-sm text-white">
                                    Мінімалістичний стиль
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood5"
                                    name="designMood5"
                                    disabled={!editMode}
                                    checked={formState.designMood5}
                                    value={formState.designMood5}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood5"
                                    className="ml-2 text-sm text-white">
                                    Стриманий стиль з акцентом на
                                    функціональність
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood6"
                                    name="designMood6"
                                    disabled={!editMode}
                                    checked={formState.designMood6}
                                    value={formState.designMood6}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood6"
                                    className="ml-2 text-sm text-white">
                                    Стиль де переважає текст
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood7"
                                    name="designMood7"
                                    disabled={!editMode}
                                    checked={formState.designMood7}
                                    value={formState.designMood7}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood7"
                                    className="ml-2 text-sm text-white">
                                    Стиль де переважають зображення
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="designMood8"
                                    name="designMood8"
                                    disabled={!editMode}
                                    checked={formState.designMood8}
                                    value={formState.designMood8}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="designMood8"
                                    className="ml-2 text-sm text-white">
                                    Стиль де переважають відео- та анімовані
                                    елементи
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="designMoodCustom"
                                    className="block text-sm font-medium text-white">
                                    Ваш варіант
                                </label>
                                <textarea
                                    id="designMoodCustom"
                                    name="designMoodCustom"
                                    disabled={!editMode}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formState.designMoodCustom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="brandbook"
                            className="block text-sm font-medium text-white">
                            У вас є готовий брендбук чи напрацювання відносно
                            дизайну та брендингу сайту?
                        </label>
                        <input
                            id="brandbook"
                            name="brandbook"
                            disabled={!editMode}
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.brandbook}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="brandbookMatch"
                            className="block text-sm font-medium text-white">
                            Наскільки чітко ми повинні дотримуватись його вимог?
                        </label>
                        <input
                            id="brandbookMatch"
                            name="brandbookMatch"
                            disabled={!editMode}
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.brandbookMatch}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Функціонал та навігація
                    </div>
                    <div>
                        <label
                            htmlFor="features"
                            className="block text-sm font-medium text-white">
                            Перерахуйте можливості, які мають бути на сайті
                        </label>
                        <textarea
                            id="features"
                            name="features"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.features}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="pages"
                            className="block text-sm font-medium text-white">
                            Які сторінки обов'язково мають бути на сайті?
                        </label>
                        <div
                            id="pages"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages1"
                                    name="pages1"
                                    disabled={!editMode}
                                    checked={formState.pages1}
                                    value={formState.pages1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages1"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Про нас"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages2"
                                    name="pages2"
                                    disabled={!editMode}
                                    checked={formState.pages2}
                                    value={formState.pages2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages2"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Контакти"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages3"
                                    name="pages3"
                                    disabled={!editMode}
                                    checked={formState.pages3}
                                    value={formState.pages3}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages3"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Новини"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages4"
                                    name="pages4"
                                    disabled={!editMode}
                                    checked={formState.pages4}
                                    value={formState.pages4}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages4"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Блог"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages5"
                                    name="pages5"
                                    disabled={!editMode}
                                    checked={formState.pages5}
                                    value={formState.pages5}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages5"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Послуги"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages6"
                                    name="pages6"
                                    disabled={!editMode}
                                    checked={formState.pages6}
                                    value={formState.pages6}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages6"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Продукція"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages7"
                                    name="pages7"
                                    disabled={!editMode}
                                    checked={formState.pages7}
                                    value={formState.pages7}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages7"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Партнери"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages8"
                                    name="pages8"
                                    disabled={!editMode}
                                    checked={formState.pages8}
                                    value={formState.pages8}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages8"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Кар'єра"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages9"
                                    name="pages9"
                                    disabled={!editMode}
                                    checked={formState.pages9}
                                    value={formState.pages9}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages9"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Галерея"
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="pages10"
                                    name="pages10"
                                    disabled={!editMode}
                                    checked={formState.pages10}
                                    value={formState.pages10}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="pages10"
                                    className="ml-2 text-sm text-white">
                                    Сторінка "Портфоліо"
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="pagesCustom"
                                    className="block text-sm font-medium text-white">
                                    Ваш варіант
                                </label>
                                <textarea
                                    id="pagesCustom"
                                    name="pagesCustom"
                                    disabled={!editMode}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formState.pagesCustom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="additionalFeatures"
                            className="block text-sm font-medium text-white">
                            Які додаткові функції мають бути на сайті?
                        </label>
                        <div
                            id="additionalFeatures"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="additionalFeatures1"
                                    name="additionalFeatures1"
                                    disabled={!editMode}
                                    checked={formState.additionalFeatures1}
                                    value={formState.additionalFeatures1}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="additionalFeatures1"
                                    className="ml-2 text-sm text-white">
                                    Форми зворотнього зв'язку
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="additionalFeatures2"
                                    name="additionalFeatures2"
                                    disabled={!editMode}
                                    checked={formState.additionalFeatures2}
                                    value={formState.additionalFeatures2}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="additionalFeatures2"
                                    className="ml-2 text-sm text-white">
                                    Чат-бот
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="additionalFeatures3"
                                    name="additionalFeatures3"
                                    disabled={!editMode}
                                    checked={formState.additionalFeatures3}
                                    value={formState.additionalFeatures3}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="additionalFeatures3"
                                    className="ml-2 text-sm text-white">
                                    Попап-вікна
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="additionalFeatures4"
                                    name="additionalFeatures4"
                                    disabled={!editMode}
                                    checked={formState.additionalFeatures4}
                                    value={formState.additionalFeatures4}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="additionalFeatures4"
                                    className="ml-2 text-sm text-white">
                                    Відгуки
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="additionalFeatures5"
                                    name="additionalFeatures5"
                                    disabled={!editMode}
                                    checked={formState.additionalFeatures5}
                                    value={formState.additionalFeatures5}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="additionalFeatures5"
                                    className="ml-2 text-sm text-white">
                                    Підписка на новини
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="additionalFeatures6"
                                    name="additionalFeatures6"
                                    disabled={!editMode}
                                    checked={formState.additionalFeatures6}
                                    value={formState.additionalFeatures6}
                                    onChange={handleChangeCheckbox}
                                />
                                <label
                                    htmlFor="additionalFeatures6"
                                    className="ml-2 text-sm text-white">
                                    Інтеграція з соціальними мережами
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="additionalFeaturesCustom"
                                    className="block text-sm font-medium text-white">
                                    Ваш варіант
                                </label>
                                <textarea
                                    id="additionalFeaturesCustom"
                                    name="additionalFeaturesCustom"
                                    disabled={!editMode}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formState.additionalFeaturesCustom}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="homepageContent"
                            className="block text-sm font-medium text-white">
                            Що має знаходитись на головній сторінці?
                        </label>
                        <textarea
                            id="homepageContent"
                            name="homepageContent"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.homepageContent}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Інші питання
                    </div>
                    <div>
                        <label
                            htmlFor="contentFilling"
                            className="block text-sm font-medium text-white">
                            Чи повинні ми виконати наповнення сайту контентом?
                        </label>
                        <input
                            id="contentFilling"
                            name="contentFilling"
                            disabled={!editMode}
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.contentFilling}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="advertising"
                            className="block text-sm font-medium text-white">
                            Чи займатимемось ми просуванням сайту?
                        </label>
                        <input
                            id="advertising"
                            name="advertising"
                            disabled={!editMode}
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.advertising}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="seoOptimization"
                            className="block text-sm font-medium text-white">
                            Чи потрібно нам виконати SEO оптимізацію?
                        </label>
                        <input
                            id="seoOptimization"
                            name="seoOptimization"
                            disabled={!editMode}
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.seoOptimization}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="domain"
                            className="block text-sm font-medium text-white">
                            Чи є у вас готовий домен?
                        </label>
                        <input
                            id="domain"
                            name="domain"
                            disabled={!editMode}
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.domain}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="support"
                            className="block text-sm font-medium text-white">
                            Чи потрібна вам підтримка сайту після запуску?
                        </label>
                        <input
                            id="support"
                            name="support"
                            disabled={!editMode}
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.support}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-4 pb-12">
                    <div className="block text-lg font-medium text-white">
                        Терміни виконання та бюджет
                    </div>
                    <div>
                        <label
                            htmlFor="deadline"
                            className="block text-sm font-medium text-white">
                            Терміни виконання роботи
                        </label>
                        <textarea
                            id="deadline"
                            name="deadline"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.deadline}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-white">
                            Бюджет на виконання роботи
                        </label>
                        <textarea
                            id="budget"
                            name="budget"
                            disabled={!editMode}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.budget}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={!editMode}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-950 disabled:hover:bg-indigo-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Зберегти
                </button>
                <button
                    onDoubleClick={handleDelete}
                    disabled={!editMode}
                    className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 disabled:bg-red-950 disabled:hover:bg-red-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Видалити (подвійний клік)
                </button>
            </form>
        </div>
    )
}
