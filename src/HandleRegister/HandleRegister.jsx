import { useState } from "react";

export default function HandleRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcome, setWelcome] = useState("");
  const [fnError, setFnError] = useState(false);
  const [lnError, setLnError] = useState(false);

  const handleRegister = () => {
    const value = `Welcome ${firstName} ${lastName}`
    if (firstName === "") {
      setFnError(true);
    } else {
      setFnError(false);
    }
    if (lastName === "") {
      setLnError(true);
    }
    else {
      setLnError(false);
    }
    setWelcome(value);
  }

  return (
    <div className="min-h-screen flex justify-center pt-10 bg-gray-100">
      {welcome && !fnError && !lnError ? (
        <div className="text-2xl font-semibold text-green-600">
          {welcome}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

          <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>

          {/* FIRST NAME */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">First Name</label>
            <input
              onBlur={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter first name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
            {fnError && (
              <p className="text-red-500 text-sm mt-1">Please enter first name</p>
            )}
          </div>

          {/* LAST NAME */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              onBlur={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter last name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
            {lnError && (
              <p className="text-red-500 text-sm mt-1">Please enter last name</p>
            )}
          </div>

          {/* AGE */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* GENDER */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Gender</label>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="Male" />
                Male
              </label>

              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="Female" />
                Female
              </label>

              <label className="flex items-center gap-1">
                <input type="radio" name="gender" value="Others" />
                Others
              </label>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition"
          >
            Register
          </button>

        </div>
      )}
    </div>
  );
}