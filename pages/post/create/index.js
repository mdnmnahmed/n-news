import { useRef } from "react";
import { validateInputFields } from "../../../utils_global/validateInputFields";
import errorHandler from "../../../service_frontend/utils/errorHandler";
import { apiCallsHandler } from "../../../service_frontend/utils/apiCallsHandler";
import { toast } from "react-toastify";

export default function PostCreatePage() {

    const titleRef = useRef();
    const topicRef = useRef();
    const descriptionRef = useRef();

    const handleCreatePost = async (event) => {
        event.preventDefault();

        const fields = {
            title: titleRef.current.value,
            topic: topicRef.current.value,
            description: descriptionRef.current.value
        }

        try {
            validateInputFields(fields);
            const createdPost = await apiCallsHandler('/post/create', 'POST', fields);
            // console.log('createdPost', createdPost);
            toast.success(createdPost?.message);
            push('/');
        } catch (error) {
            errorHandler(error);
        }
    }

    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font relative">
                <div class="container mx-auto mt-12">
                    <div class="lg:w-2/3 md:w-1/2 mx-auto">
                        <div class="">
                            <h1 class="sm:text-1xl text-2xl font-medium title-font mb-4 text-white">Create Post</h1>
                        </div>

                        <form onSubmit={handleCreatePost}>
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label htmlFor="name" class="leading-7 text-sm text-gray-400">Title</label>
                                        <input type="text" id="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            ref={titleRef}
                                        />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label htmlFor="topic" class="leading-7 text-sm text-gray-400">Topic</label>
                                        <input type="text" id="topic" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            ref={topicRef}
                                        />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label htmlFor="description" class="leading-7 text-sm text-gray-400">Description</label>
                                        <textarea id="description" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ref={descriptionRef}
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="p-2">
                                    <button type="submit" class="flex mx-auto text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-teal-800 rounded text-lg">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}