import React from 'react'
import Footer from './Footer'
import Image from 'next/image'

export const ThoughtsPlus = () => {
    return (
        <div className='w-full h-auto pt-[140px]'>
            <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
                <h2 className='pb-6'>Thoughts +</h2>
                <div className=''>
                    <Image src="/assets/thoughts/IMG_6251.JPG" alt='Anton Stallbörger Quality' width="593" height="305" className='rounded-xl object-cover mb-4 max-h-[305px]' priority='true'></Image>
                    <h4 className='mb-2 mt-6 text-xl'>The value of true friendship</h4>
                    <p className='mb-6'>
                    Vor ein paar Jahren hat das alles für mich gar kein Sinn mehr gemacht. Irgendwie versuchen durch den Tag zu kommen ohne mal wieder in Tränen zusammen zu brechen. Niemanden zu haben mit dem man über seine Gefühle und Ängste reden kann ist die pure Zerstörung von innen heraus. 
                    <br />
                    <br />
                    Ich hatte nie wirklich Anschluss zu anderen gefunden. Freundschaften waren immer nur oberflächlich und so wirklich interessiert hat sich nie jemand. Macht das Leben so überhaupt einen Sinn. Wie soll das ganze denn in der Zukunft weiter gehen? Ich kann ja nicht für immer alles in mich rein fressen. 
                    <br />
                    <br />         
                    Wenn man sich nie wirklich dazu gehörig fühlt und oft einfach nur dabei ist aber es keinen wirklich interessiert, wenn man nicht da wäre, macht das schon etwas mit einem. 
                    <br />
                    <br />
                    Aufgeben war für mich aber nie eine Option. Dafür sind mir meine Liebsten und mein Leben einfach zu wertvoll. Ich weiß dass es immer einen Weg gibt. “Das wird schon alles irgendwann” sag ich mir in solchen Situationen immer.
                    <br />
                    <br />
                    Ich bin mir sicher dass ich durch diese Zeit nur stärker geworden bin und gelernt habe welche “Freunde” es wirklich wert sind. 
                    <br />
                    <br />
                    Ein paar Jahre später und ich kann das alles nicht glauben. Ich bin fröhlicher denn je und fühl mich in einigen Punkten deutlich selbstbewusster. Freunde zu haben mit denen man sich nicht nur über oberflächliche Dinge austauschen kann, sondern darüber wie es einem wirklich geht, wie man sich in Situationen fühlt und was man für Ängste hat, ist so viel Wert. 
                    <br />
                    <br />
                    Zu wissen, da ist jemand für dich da, gibt mir so viel. Egal wer du bist, egal was du machst und egal in welchem Abschnitt in deinem Leben du gerade bist, wenn du an einem Punkt angekommen bist wo du denkst das alles macht keinen Sinn, denk daran dass es auf dieser Welt Menschen gibt, für die es sich lohnt zu kämpfen und dass es immer einen Weg gibt. 
                    <br />
                    <br />
                    Es ist wichtig, sich mit anderen zu verbinden und Unterstützung zu suchen, wenn man sich überfordert fühlt. Es ist nie zu spät, neue Freundschaften zu schließen. Bleib stark und halte an deinen Liebsten und deinem Leben fest, denn du bist wirklich wertvoll. Egal was kommt, ich werde immer für dich da sein. Danke für alles.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default ThoughtsPlus