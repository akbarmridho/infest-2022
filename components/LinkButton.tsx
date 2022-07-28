interface Props {
    name: string,
    href: string,
    className?: string
}

const LinkButton = ({name, href, className} : Props) => {
    return (
        <a href={href} className={`bg-tgreen-300 mt-2 sm:mt-0 px-6 py-2 text-gray-100 ${href === '#' ? '' : 'hover:text-gray-300 shadow-xl'} font-tommy text-3xl rounded-2xl ${className}`} target={href === '#' ? '' : "_blank"} rel="noreferrer">
            {name}
        </a>
    )
}

export default LinkButton