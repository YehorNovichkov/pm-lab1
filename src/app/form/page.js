'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Form(params) {
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

    const handleChangeType = e => {
        setFormState({
            ...formState,
            type: e.target.value,
            typeCustom: '',
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
        setFormState({ ...formState, createdAt: new Date() })

        const response = await fetch('/api/createForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })

        const data = await response.json()

        if (data.success) {
        } else {
            alert('Виникла помилка при відправці форми')
        }
    }

    return (
        <div className="sm:mx-6 lg:mx-64 2xl:mx-96 my-6 mx-6">
            <h1 className="text-3xl font-bold text-white pb-12">
                Форма для заявки
            </h1>
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
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                            value={formState.websiteName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="types"
                            className="block text-sm font-medium text-white">
                            Тип веб-сайту
                        </label>
                        <div
                            id="types"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="type1"
                                    name="type"
                                    value={'Бізнес сайт'}
                                    checked={formState.type === 'Бізнес сайт'}
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Бізнес сайт
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type2"
                                    name="type"
                                    value={'eCommerce сайт (Онлайн магазин)'}
                                    checked={
                                        formState.type ===
                                        'eCommerce сайт (Онлайн магазин)'
                                    }
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    eCommerce сайт (Онлайн магазин)
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type3"
                                    name="type"
                                    value={'Маркетплейс'}
                                    checked={formState.type === 'Маркетплейс'}
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Маркетплейс
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type4"
                                    name="type"
                                    value={'Блог'}
                                    checked={formState.type === 'Блог'}
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Блог
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type5"
                                    name="type"
                                    value={'Портфоліо'}
                                    checked={formState.type === 'Портфоліо'}
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Портфоліо
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type6"
                                    name="type"
                                    value={'Nonprofit сайт (Благодійний фонд)'}
                                    checked={
                                        formState.type ===
                                        'Nonprofit сайт (Благодійний фонд)'
                                    }
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Nonprofit сайт (Благодійний фонд)
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type7"
                                    name="type"
                                    value={'Персональний сайт'}
                                    checked={
                                        formState.type === 'Персональний сайт'
                                    }
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Персональний сайт
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type8"
                                    name="type"
                                    value={'Форум'}
                                    checked={formState.type === 'Форум'}
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Форум
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type9"
                                    name="type"
                                    value={'Сайт-брошура'}
                                    checked={formState.type === 'Сайт-брошура'}
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Сайт-брошура
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type10"
                                    name="type"
                                    value={'Інформаційний сайт'}
                                    checked={
                                        formState.type === 'Інформаційний сайт'
                                    }
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Інформаційний сайт
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="type11"
                                    name="type"
                                    value={'Соціальна мережа'}
                                    checked={
                                        formState.type === 'Соціальна мережа'
                                    }
                                    onChange={handleChangeType}
                                />
                                <label
                                    htmlFor="type"
                                    className="ml-2 text-sm text-white">
                                    Соціальна мережа
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="typeCustom"
                                    className="block text-sm font-medium text-white">
                                    Ваш варіант (анулює вибір вище)
                                </label>
                                <textarea
                                    id="typeCustom"
                                    name="typeCustom"
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formState.typeCustom}
                                    onChange={handleChangeTypeCustom}
                                />
                            </div>
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
                        <div
                            id="brandbook"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="brandbookYes"
                                    name="brandbook"
                                    value={'Так'}
                                    checked={formState.brandbook === 'Так'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="brandbookYes"
                                    className="ml-2 text-sm text-white">
                                    Так
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="brandbookNo"
                                    name="brandbook"
                                    value={'Ні'}
                                    checked={formState.brandbook === 'Ні'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="brandbookNo"
                                    className="ml-2 text-sm text-white">
                                    Ні
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="brandbookMatch"
                            className="block text-sm font-medium text-white">
                            Наскільки чітко ми повинні дотримуватись його вимог?
                        </label>
                        <div
                            id="brandbookMatch"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="brandbookMatch1"
                                    name="brandbookMatch"
                                    value={'Дотримуватись максимально чітко'}
                                    checked={
                                        formState.brandbookMatch ===
                                        'Дотримуватись максимально чітко'
                                    }
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="brandbookMatch1"
                                    className="ml-2 text-sm text-white">
                                    Дотримуватись максимально чітко
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="brandbookMatch2"
                                    name="brandbookMatch"
                                    value={'Допустимі певні відхилення'}
                                    checked={
                                        formState.brandbookMatch ===
                                        'Допустимі певні відхилення'
                                    }
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="brandbookMatch2"
                                    className="ml-2 text-sm text-white">
                                    Допустимі певні відхилення
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="brandbookMatch3"
                                    name="brandbookMatch"
                                    value={'Не важливо'}
                                    checked={
                                        formState.brandbookMatch ===
                                        'Не важливо'
                                    }
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="brandbookMatch3"
                                    className="ml-2 text-sm text-white">
                                    Не важливо
                                </label>
                            </div>
                        </div>
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
                        <div
                            id="contentFilling"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="contentFillingYes"
                                    name="contentFilling"
                                    value={'Так'}
                                    checked={formState.contentFilling === 'Так'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="contentFillingYes"
                                    className="ml-2 text-sm text-white">
                                    Так
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="contentFillingNo"
                                    name="contentFilling"
                                    value={'Ні'}
                                    checked={formState.contentFilling === 'Ні'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="contentFillingNo"
                                    className="ml-2 text-sm text-white">
                                    Ні
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="advertising"
                            className="block text-sm font-medium text-white">
                            Чи займатимемось ми просуванням сайту?
                        </label>
                        <div
                            id="advertising"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="advertisingYes"
                                    name="advertising"
                                    value={'Так'}
                                    checked={formState.advertising === 'Так'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="advertisingYes"
                                    className="ml-2 text-sm text-white">
                                    Так
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="advertisingNo"
                                    name="advertising"
                                    value={'Ні'}
                                    checked={formState.advertising === 'Ні'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="advertisingNo"
                                    className="ml-2 text-sm text-white">
                                    Ні
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="seoOptimization"
                            className="block text-sm font-medium text-white">
                            Чи потрібно нам виконати SEO оптимізацію?
                        </label>
                        <div
                            id="seoOptimization"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="seoOptimizationYes"
                                    name="seoOptimization"
                                    value={'Так'}
                                    checked={
                                        formState.seoOptimization === 'Так'
                                    }
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="seoOptimizationYes"
                                    className="ml-2 text-sm text-white">
                                    Так
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="seoOptimizationNo"
                                    name="seoOptimization"
                                    value={'Ні'}
                                    checked={formState.seoOptimization === 'Ні'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="seoOptimizationNo"
                                    className="ml-2 text-sm text-white">
                                    Ні
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="domain"
                            className="block text-sm font-medium text-white">
                            Чи є у вас готовий домен?
                        </label>
                        <div
                            id="domain"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="domainYes"
                                    name="domain"
                                    value={'Так'}
                                    checked={formState.domain === 'Так'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="domainYes"
                                    className="ml-2 text-sm text-white">
                                    Так
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="domainNo"
                                    name="domain"
                                    value={'Ні'}
                                    checked={formState.domain === 'Ні'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="domainNo"
                                    className="ml-2 text-sm text-white">
                                    Ні
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="support"
                            className="block text-sm font-medium text-white">
                            Чи потрібна вам підтримка сайту після запуску?
                        </label>
                        <div
                            id="support"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <div>
                                <input
                                    type="radio"
                                    id="supportYes"
                                    name="support"
                                    value={'Так'}
                                    checked={formState.support === 'Так'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="supportYes"
                                    className="ml-2 text-sm text-white">
                                    Так
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="supportNo"
                                    name="support"
                                    value={'Ні'}
                                    checked={formState.support === 'Ні'}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="supportNo"
                                    className="ml-2 text-sm text-white">
                                    Ні
                                </label>
                            </div>
                        </div>
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
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={formState.budget}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <Link
                    onClick={handleSubmit}
                    href={'/thank-you'}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Відправити
                </Link>
            </form>
        </div>
    )
}
