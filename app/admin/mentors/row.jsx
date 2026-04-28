"use client";
import { useState, useRef } from 'react';
import { FileUploader } from "react-drag-drop-files";

export default function Row(params) {
    const mentor = params.mentor;
    const deleteMentor = params.deleteMentor;
    const editMentor = params.editMentor;
    const uploadImage = params.uploadImage;
    const [selected, setSelected] = useState(false);
    const [image, setImage] = useState(false);

    // refs
    const nameInput = useRef(null);
    const posInput = useRef(null);
    const descInput = useRef(null);
    const yearsInput = useRef(null);
    const specialtyInput = useRef(null);
    const occupationInput = useRef(null);

    
    function submitEdit() {
        const name = nameInput.current?.innerText;
        const pos = posInput.current?.innerText;
        const desc = descInput.current?.innerText;
        const years = yearsInput.current?.innerText;
        const specialty = specialtyInput.current?.innerText;
        const occupation = occupationInput.current?.innerText;
        mentor.name = name;
        mentor.position = pos
        mentor.description = desc;
        mentor.years = years;
        mentor.specialty = specialty;
        mentor.occupation = occupation;
        editMentor(mentor.sort, name,pos, desc,years,specialty,occupation);
        setSelected(false);
    }
    async function handleChange(uploadedFile) {
      const formData = new FormData();
      formData.append("image", uploadedFile);
      formData.append("sort", mentor.sort);
      await uploadImage(formData);
      setImage(false);
    }
    return (
        <div
            className="grid grid-cols-13 items-center text-center bg-gray-200 rounded p-2 mx-2"
          >
            {
                !selected && (
                    <>
                        <div className="col-span-1">{mentor.name}</div>
                        <div className="col-span-1">{mentor.position}</div>
                        <div className="col-span-4">{mentor.description}</div>
                        <div className="col-span-1">{mentor.years}</div>
                        <div className="col-span-2">{mentor.specialty}</div>
                        <div className="col-span-1">{mentor.occupation}</div>
                    </>
                )
            }
            {
                selected && (
                    <>
                        <div contentEditable suppressContentEditableWarning ref={nameInput} className="col-span-1 text-center border-2 border-gray-500 rounded mx-3">{mentor.name}</div>
                        <div contentEditable suppressContentEditableWarning ref={posInput} className="col-span-1 text-center border-2 border-gray-500 rounded mx-3">{mentor.position}</div>
                        <div contentEditable suppressContentEditableWarning ref={descInput} className="col-span-4 text-center border-2 border-gray-500 rounded mx-3">{mentor.description}</div>
                        <div contentEditable suppressContentEditableWarning ref={yearsInput} className="col-span-1 text-center border-2 border-gray-500 rounded mx-3">{mentor.years}</div>
                        <div contentEditable suppressContentEditableWarning ref={specialtyInput} className="col-span-2 text-center border-2 border-gray-500 rounded mx-3">{mentor.specialty}</div>
                        <div contentEditable suppressContentEditableWarning ref={occupationInput} className="col-span-1 text-center border-2 border-gray-500 rounded mx-3">{mentor.occupation}</div>
                    </>
                )
            }
            <div className="col-span-3 flex flex-col py-2 space-y-2 justify-center items-center">
                <div className="flex flex-row justify-center items-center space-x-2">
                { !selected && (
              <button onClick={() => setSelected(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/67 duration-300 ease-out rounded-xl"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
              </button>)
                }
                { selected && (
                  <button onClick={() => {submitEdit();}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/67 duration-300 ease-out rounded-xl" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                  </button>
                )}
                { !image && (
              <button onClick={() => setImage(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-pink-400/50 duration-300 ease-out rounded-xl" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM272 224c8.4 0 16.1 4.4 20.5 11.5l88 144c4.5 7.4 4.7 16.7 .5 24.3S368.7 416 360 416L88 416c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l26.4 37.8 61.4-100.5c4.4-7.1 12.1-11.5 20.5-11.5z"/></svg>
              </button>)
                }
                { image && (
              <button onClick={() => setImage(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-pink-400/50 duration-300 ease-out rounded-xl" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
              </button>)
                }
              <form action={deleteMentor} className="flex justify-center items-center">
                <input type="hidden" name="name" value={mentor.name} />
                <input type="hidden" name="desc" value={mentor.description} />
                <input type="hidden" name="years" value={mentor.years} />
                <input type="hidden" name="specialty" value={mentor.specialty} />
                <input type="hidden" name="occupation" value={mentor.occupation} />
    
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-red-500/50 duration-300 ease-out rounded-xl"
                  >
                    <path d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-32-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"/>
                  </svg>
                </button>
              </form>
            </div>
            
                {
                    image && (
                        <div className="md:w-[75%]">
                        <FileUploader
                            handleChange={handleChange}
                            types={['JPG','JPEG','PNG']}
                            maxSize={1}
                            multiple={false}
                            uploadedLabel="Uploaded Successfully!"
                            />
                        </div>
                    )
                }
            </div>
          </div>
    )
}