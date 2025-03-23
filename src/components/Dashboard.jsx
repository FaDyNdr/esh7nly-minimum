import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { User, LogOut } from 'lucide-react'

export default function Dashboard() {
  const [crystalAmount, setCrystalAmount] = useState('')
  const [userId, setUserId] = useState('')

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold flex items-center">
          <User className="mr-2" />
          Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <LogOut className="mr-1" />
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Crystal Amount
            </label>
            <input
              type="number"
              value={crystalAmount}
              onChange={(e) => setCrystalAmount(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter crystal amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter user ID"
            />
          </div>

          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
