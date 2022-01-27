import Nav from "./components/Nav"
import Footer from "./components/Footer"

function accounting() {
    return (
        <div className='text-lg' >
            <Nav highlightAccounting={true} />
            <div className="w-full text-5xl bg-gray-900  text-white mt-2 py-5 text-center">Accounting Services</div>
            <div className='py-5 ml-5'>
                <div className='border-l-2 border-blue-600 px-5'>
                <p>Year end financial statements</p>
                <p>Management accounts</p>
                <p>Monthly bookkeepingservices</p>
                <p>Payroll administration</p></div>
            </div>
            
            <div className="w-full text-5xl bg-gray-900  text-white mt-2 py-5 text-center">Company Secreterial Services</div>
            <div className='py-5 ml-5'>
                <div className='border-l-2 border-blue-600 px-5'>
                <p>Company Formation</p>
                <p>Company Change Of Name</p>
                <p>Annual Returns</p>
                <p>CR14 , CR6 , CR2 , CR11 </p>
                <p>Minuites and resolutions</p>
                <p>Share Certificate and Share Transfers</p>    
                </div>
                
            </div>
            <div className="w-full text-5xl bg-gray-900  text-white mt-2 py-5 text-center">Tax Consultancy</div>
            <div className='py-5 ml-5'>
                <div className='border-l-2 border-blue-600 px-5'>
                    <p>
                        Business partner number application 
                    </p>
                    <p>VAT Registration, VAT Calculation & Remittance</p>
                    <p>ITF263 (Tax Clearence Certificate)</p>
                    <p>Corporate Income TAx Computation</p>
                    <p>Remittance of   all statutory return (PAYE, NEC , NSSA)</p>
                    <p>Capital Gains Tax Calculation & Remittance</p>
                    <p>Withholding Tax Calculation & Remittance</p>
                    <p>Tax Planning </p>
                    <p>General Tax Health Checks</p>
                </div>
            </div>
            <div className="w-full text-5xl bg-gray-900  text-white mt-2 py-5 text-center">Payroll</div>
            <div className='py-5 ml-5'>
                <div className='border-l-2 border-blue-600 px-5'>
                <p>Payroll Administration</p>
                <p>Calculating Payroll taxes and ensuring the correct deductions</p>
                <p>Providing pay slips and other payroll reports</p>
                </div>
            </div>
            <div>

            </div>
            <Footer />
        </div>
    )
}

export default accounting
