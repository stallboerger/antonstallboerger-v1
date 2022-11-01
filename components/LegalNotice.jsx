import React from 'react'
import Footer from '../components/Footer'

export const LegalNotice = () => {
  return (
    <div className='w-full h-auto pt-[180px]'>
        <div className='max-w-[593px] h-full mx-auto flex flex-col px-4'>
            <p className='pb-6'>
                Legal Notice 
                <br/>
                <br/>
                If you require any more information or have any questions about our sites disclaimer, please feel free to contact us by email at anton@stallboerger.de. Our Disclaimer was generated with the help of the Free Disclaimer Generator.
                <br/>
                <br/>
                Disclaimers for Anton Stallbörger
                All the information on this website - https://antonstallboerger.com/ - is published in good faith and for general information purpose only. Anton Stallbörger does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Anton Stallbörger), is strictly at your own risk. Anton Stallbörger will not be liable for any losses and/or damages in connection with the use of our website.
                <br/>
                <br/>
                From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone bad.
                <br/>
                <br/>
                Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their Terms of Service before engaging in any business or uploading any information.
                <br/>
                <br/>
                Consent
                By using our website, you hereby consent to our disclaimer and agree to its terms.
                <br/>
                <br/>
                Update
                Should we update, amend or make any changes to this document, those changes will be prominently posted here.
            </p>
            <Footer />
        </div> 
    </div>
  )
}

export default LegalNotice