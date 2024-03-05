'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Admin() {
    const [username, setUsername] = useState('')
    const [usernameEmpty, setUsernameEmpty] = useState(false)
    const [loginDataLoaded, setLoginDataLoaded] = useState(null)
    const [password, setPassword] = useState('')
    const [passwordEmpty, setPasswordEmpty] = useState(false)
    const [data, setData] = useState(null)
    const [sortKey, setSortKey] = useState('createdAt')
    const [sortDirection, setSortDirection] = useState('-1')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const username = sessionStorage.getItem('username')
        const password = sessionStorage.getItem('password')

        if (username && password) {
            setUsername(username)
            setPassword(password)
            setLoginDataLoaded(true)
        } else {
            setLoginDataLoaded(false)
        }
    }, [])

    useEffect(() => {
        if (username && password) {
            fetchForms().then(() => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [loginDataLoaded])

    const handleSubmit = async event => {
        event.preventDefault()
        setLoading(true)

        sessionStorage.setItem('username', username)
        sessionStorage.setItem('password', password)

        fetchForms().then(() => setLoading(false))
    }

    const fetchForms = async () => {
        const response = await fetch('/api/getForms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                sortKey,
                sortDirection,
            }),
        })

        if (response.ok) {
            const data = await response.json()
            setData(data)
        } else {
            const error = await response.json()
            alert(error.message)
        }
    }

    const handleUsernameChange = event => {
        setUsername(event.target.value)
        if (!event.target.value) {
            setUsernameEmpty(true)
        } else {
            setUsernameEmpty(false)
        }
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
        if (!event.target.value) {
            setPasswordEmpty(true)
        } else {
            setPasswordEmpty(false)
        }
    }

    const handleSortKeyChange = event => {
        setSortKey(event.target.value)
    }

    const handleSortDirectionChange = event => {
        setSortDirection(event.target.value)
    }

    useEffect(() => {
        if (username && password) {
            fetchForms()
        }
    }, [sortKey, sortDirection])

    return (
        <>
            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
                </div>
            )}

            {!data && !loading && !loginDataLoaded && (
                <div className="flex justify-center items-center h-screen">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username">
                                Логін
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    usernameEmpty && 'border-red-500'
                                }`}
                                id="username"
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                            {usernameEmpty && (
                                <p className="text-red-500 text-xs italic hi">
                                    Логін обов'язковий
                                </p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password">
                                Пароль
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                    passwordEmpty && 'border-red-500'
                                }`}
                                id="password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            {passwordEmpty && (
                                <p className="text-red-500 text-xs italic">
                                    Пароль обов'язковий
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="submit">
                                Увійти
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {data && !loading && (
                <div className="sm:mx-6 lg:mx-64 2xl:mx-96 my-6 mx-6">
                    <h1 className="text-3xl font-bold text-white pb-12">
                        Відправлені форми
                    </h1>
                    <div className="space-x-2 mb-4">
                        <select
                            className="mt-1 w-auto py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={sortKey}
                            onChange={handleSortKeyChange}>
                            <option value="createdAt">За датою</option>
                            <option value="websiteName">За назвою</option>
                        </select>
                        <select
                            className="mt-1 w-auto py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={sortDirection}
                            onChange={handleSortDirectionChange}>
                            <option value="-1">За спаданням</option>
                            <option value="1">За зростанням</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        {data.data.map(form => (
                            <Link
                                href={'./form/' + form._id}
                                key={form._id}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-neutral-800 rounded-md shadow-sm hover:outline-none hover:ring-indigo-500 hover:border-indigo-500 hover:cursor-pointer sm:text-sm">
                                <h2 className="text-xl font-bold">
                                    {form.websiteName}
                                </h2>
                                <p className="text-neutral-400">
                                    {form.customerName}
                                </p>
                                <p className="text-neutral-400">
                                    {form.createdAt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
