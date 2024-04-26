"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { themes, purposes, languages } from "@/utils/data";
import DropDown from "@/components/DropDown";
import { useFormState } from "react-dom";
import { useState } from "react";

const HomePage =  () => {
  const [theme, setTheme] = useState("")
  const [language, setLanguage] = useState("")
  const [purpose, setPurpose] = useState("")
  const [code, setCode] = useState("")
  const [reply, setReply] = useState([])

  // handler function
  const handleThemeChange = (value: string) => setTheme(value);
  const handlePurposeChange = (value: string) => setPurpose(value);
  const handleLanguageChange = (value: string) => setLanguage(value);
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await fetch(`/api/code`,{
      method:"POST",
      body:JSON.stringify({
        theme,
        language,
        purpose,
        code
      })
    })
    if (res.status === 200) {
      const data = res.json();
      console.log(data);
    }
  }

  return (
    <section className="p-5 min-h-screen">
      <div>Code To Video</div>

      <div className="flex justify-between mt-5">
        {/* Left part */}
        <div className="border rounded-lg min-w-[49%] px-5 pt-5 pb-3">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <DropDown title="Select Theme" options={themes} setVal={handleThemeChange}/>
              <DropDown title="Select Purpose" options={purposes} setVal={handlePurposeChange}/>
              <DropDown title="Select Language" options={languages} setVal={handleLanguageChange}/>
            </div>

            <div className=" mt-4 min-h-[80%]">
              <Textarea
                placeholder="Enter your code here "
                className=" min-h-[20rem] resize-none"
                required
                name="code"
                onChange={(e)=>setCode(e.target.value)}
              />
              <div className="text-right flex items-center justify-end mt-4">
                <p className="text-xs mr-2 text-slate-400">
                  Click the button to generate video of your code
                </p>
                <Button className="" type="submit">
                  Generate
                </Button>
              </div>{" "}
            </div>
          </form>
        </div>

        {/* Right Part */}
        <div className="border rounded-lg min-w-[49%] p-5">
          {reply}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
