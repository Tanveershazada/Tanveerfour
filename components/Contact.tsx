
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className='wrapper'>
        <div className='max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center'>
        <h2 className='text-2xl font-bold'>Let us create awesome products!</h2>
        <p className='text-lg tracking-wide font-medium text-center'>I am always open to discussing your project, improving your online presence, or helping with your website design and converting challenge.</p>
        <a href='mailto:tanveershahsaae@gmail.com'>
        <button className='w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300'>Contact Me</button>
        </a>
        </div>
        <div className="mt-8 flex items-center flex-wrap justify-center gap-8">
        <SocialLink
        title="Github"
        link="https://github.com/Tanveershazada"
        />

<SocialLink
        title="Facebook"
        link="https://www.facebook.com/tanveershah.tanhasaai"
        />

<SocialLink
        title="Instagram"
        link="https://www.instagram.com/tanveer_aly_khan/"
        />

<SocialLink
        title="LinkedIn"
        link="https://www.linkedin.com/in/tanveer-ali-khan-9586ba248/"
        />

<SocialLink
        title="Nextjs"
        link="https://vercel.com"
        />
        </div>
    </div>
  )
}

export default Contact