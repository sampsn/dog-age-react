'use client'

import { useState } from "react"

export default function DogAge() {
  const [age, setAge] = useState<number | undefined>(undefined)
  const [result, setResult] = useState<number | undefined>(undefined)

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.valueAsNumber)

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (age == 0 || age == undefined) {
      setResult(0)
    } else {
      setResult(Math.round(16 * Math.log(age ?? 0) + 31))
    }


  }


  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Dog Age Calculator</h1>
      <form className="flex flex-col items-center gap-4 my-4" onSubmit={handleSubmit}>
        <div className="flex flex-row items-center gap-2 my-4">
          <h1 className="text-7xl">🐕</h1>
          <label htmlFor="age">Age of Dog:</label>
          <input name="age" className="bg-black border border-zinc-800 p-2 rounded-lg" type="number" placeholder="Enter Age of Dog..." onChange={handleAgeChange} />
        </div>

        <h1 className="text-7xl">👨</h1>
        <div className="h-32 flex flex-col gap-4 items-center">
          <p>Age in Human Years: </p>
          <p className="text-4xl font-bold">{result}</p>
        </div>
        <button className="hover:bg-zinc-900 hover:scale-[1.02] active:scale-[.99] transition-all border border-zinc-700 rounded-lg w-52" type="submit">Submit</button>
      </form>
    </div>
  )
}
