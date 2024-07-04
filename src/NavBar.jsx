export default function NavBar() {
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a>About Naruto</a>
                        </li>
                        <li>
                            <a>Friendship</a>
                        </li>
                        <li>
                            <a>Love</a>
                        </li>
                        <li>
                            <a>Hard Work</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-2 mx-4">
                    <a className="text-black text-xl">Ndaru</a>
                    <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.594 18H3.739c-.77 0-1.25-.935-.86-1.601l1.116-1.86C4.577 15.879 5.475 17 6.594 18M7.722 5.456c2.749-2.325 5.806-1.391 8.387-.89a1.99 1.99 0 0 0 1.997-.793l1.712-2.242a.97.97 0 0 0-.1-1.248.962.962 0 0 0-1.482.147c-1.831 2.404-1.532 2.419-4.942 1.629-.823-.191-1.679-.269-2.514-.134-4.55.735-7.941 4.901-7.492 9.731l-3.01 5.236C-.503 18.225.456 20 1.998 20h9.965c3.988.01 6.548-2.596 7.076-6.097.573-3.8-1.864-7.135-5.306-7.919-3.208-.731-6.498 1.496-6.518 4.796a5.006 5.006 0 0 0 4.158 4.96c1.79.303 3.625-.794 3.814-2.605a2.995 2.995 0 0 0-2.97-3.325.997.997 0 0 0-.996 1c0 .552.446 1 .998 1 .55 0 .996.447.996 1s-.446 1-.996 1a3 3 0 0 1-2.974-3.325c.19-1.812 2.02-2.909 3.81-2.605a5 5 0 0 1 4.148 4.959c-.019 3.243-3.233 5.481-6.4 4.827A7 7 0 0 1 5.24 10.81c0-2.148.965-4.07 2.482-5.354"
                            fill-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-black px-1">
                    <li>
                        <a>About Naruto</a>
                    </li>
                    <li>
                        <a>Friendship</a>
                    </li>
                    <li>
                        <a>Love</a>
                    </li>
                    <li>
                        <a>Hard Work</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                        />
                    </svg>
                    Follow Me
                </button>
            </div>
        </div>
    );
}
