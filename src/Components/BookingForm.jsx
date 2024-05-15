import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import data from '../utils/data';
import { useFormik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {

  const { name } = useParams();

  const [showBill, setShowBill] = useState(false);
  const filterdata = data.filter(item => item.name === name);


  const [services, setServices] = useState({
    decoration: false,
    foodCatering: false,
    entertainment: false,
    photography: false,
    invitations: false,
    transportation: false,
  });

  //formik handling 
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      contactNo: "",
      eventCategory: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      services: {
        decoration: false,
        foodCatering: false,
        entertainment: false,
        photography: false,
        invitations: false,
        transportation: false,
      }
    },
    onSubmit: (values) => {
      if (!values.firstName || !values.lastName || !values.address || !values.email || !values.contactNo || !values.eventCategory || !values.eventDate || !values.startTime || !values.endTime) {
        toast.error("Fill the complete form details");
        setShowBill(false);
        return;
      }

      setShowBill(true);
      formik.values = { ...formik.values, capacity: filterdata[0].capacity, hallAddress: filterdata[0].location }
      console.log("formik data: ", formik.values);
      toast.success("Bill generated successfully");
    }
  });

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    formik.setFieldValue(`services.${name}`, checked);
  };


  const handleGenerateBill = () => {

  };


  const today = new Date(Date.now());
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  function formatPrice(number) {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }



  const hallPrice = 12000; // Default hall price

  const totalPrice = Object.values(services).reduce((total, service) => {
    if (service) {
      // Add the price of selected services to the total
      return total + servicePrice(service);
    }
    return total;
  }, hallPrice);

  
  return (

    <div className='w-full bg-[#fffbfb] flex justify-center py-10'>


      <div className='bg-red-50 w-[90%] sm:w-[70%] rounded-md shadow-lg ' >

        <div className=' px-6 sm:px-16 flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between items-center sm:py-10  py-6 '>
          <h1 className='flex items-center text-2xl sm:text-3xl font-semibold'>Booking Form</h1>
          <div className='flex flex-col  sm:w-[40%] w-full text-left sm:text-right '>
            <div >
              <label className='text-md sm:text-lg'>Date :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="text" placeholder='' className='border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[40vw] sm:w-[17vw] text-sm sm:text-md' readOnly value={formattedDate} />
            </div>
            <div>
              <label className=' text-md sm:text-lg'>Order ID :</label>
              <input type="orderid" placeholder='' className='border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[40vw] sm:w-[17vw] text-sm sm:text-md' readOnly value={123} />
            </div>
          </div>
        </div>

        <div className=' mx-4 h-1 rounded-full bg-zinc-300 sm:bg-zinc-400'></div>

        <form autoComplete='off' onSubmit={formik.handleSubmit} className='px-6 sm:px-16 my-10'>

          <div className=' flex flex-col sm:flex-row justify-between my-2'>

            <div>
              <label htmlFor="firstname" className='text-md sm:text-lg'>First Name :</label>
              <input type="text" name="firstName" id="firstname" placeholder='' value={formik.values.firstName} className='border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[69%] sm:w-[23vw] text-sm sm:text-md' onChange={formik.handleChange} />
            </div>

            <div>
              <label htmlFor="lastname" className='text-md sm:text-lg'>Last Name : </label>
              <input type="text" name="lastName" id='lastname' placeholder='' value={formik.values.lastName} className='border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[69%] sm:w-[23vw]  text-sm sm:text-md' onChange={formik.handleChange} />
            </div>

          </div>

          <div>
            <label htmlFor="address" className='text-md sm:text-lg mb-2'>Resident Address :</label>
            <input type="text" name="address" value={formik.values.address} id='address' placeholder='' className='border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[55%] sm:w-[82.6%]  text-sm sm:text-md' onChange={formik.handleChange} />
          </div>

          <div className=' flex flex-col sm:flex-row justify-between my-2'>

            <div>
              <label htmlFor="email" className=' text-md sm:text-lg'>Email Address : </label>
              <input type="text" name="email" id="email" value={formik.values.email} placeholder='' className='border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[61%] sm:w-[21vw]  text-sm sm:text-md' onChange={formik.handleChange} />
            </div>

            <div>
              <label htmlFor="contactno" className='text-md sm:text-lg'>Contact Number : </label>
              <input type="text" name="contactNo" id='contactno' value={formik.values.contactNo} placeholder='' className=' border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[55.5%] sm:w-[20vw]  text-sm sm:text-md' onChange={formik.handleChange} />
            </div>

          </div>

          <div className='my-4 flex flex-col sm:flex-row'>
            <div className='w-full sm:w-[50.5%] flex'>
              <span className='font-semibold text-md sm:text-xl w-[30%]'>Hall Address: </span>
              <div className=''>
                <span className='text-md sm:text-lg '>  {filterdata[0].location} </span>
              </div>
            </div>
            <div>
              <span className='font-semibold text-md sm:text-xl'>Hall Capacity: </span>
              <span className='text-md sm:text-lg'>{filterdata[0].capacity} Members</span>
            </div>
          </div>


          <div class="custom-select" className="">
            <span className='font-semibold text-md sm:text-xl'>Event Category: </span>
            <select className='w-[55%] sm:w-[30%] px-2 sm:px-4 rounded-sm py-2 mx-2 sm:mx-6 text-black border-1 border-black focus:outline-none shadow-sm cursor-pointer text-sm sm:text-md' name="eventCategory" value={formik.values.eventCategory} onChange={formik.handleChange}>
              <option value="" > Select Category</option>
              <option value="Birthday" > Birthday</option>
              <option value="Marriage" > Marriage</option>
              <option value="Engagement" > Engagement</option>
              <option value="Farewell" > Farewell Party</option>
              <option value="Anniversary" > Anniversary</option>
              <option value="Family Function" > Family Function</option>
            </select>
          </div>

          <div className=' flex  flex-col sm:flex-row justify-between my-4'>

            <div>
              <label htmlFor="eventdate" className=' text-md sm:text-lg font-semibold'>Event Date : </label>
              <input type="text" id="eventdate" name="eventDate" placeholder='' autoComplete='off' className='border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[50vw] sm:w-[10vw]  text-sm sm:text-md' value={formik.values.eventDate} onChange={formik.handleChange} />
            </div>

            <div>
              <label htmlFor="starttime" className='text-md sm:text-lg font-semibold'> Start Time : </label>
              <input type="text" id='startIime' name="startTime" placeholder='' className=' border-b border-black pl-2 bg-transparent mx-2 focus:outline-none w-[51vw] sm:w-[10vw]  text-sm sm:text-md' value={formik.values.startTime} onChange={formik.handleChange} />
            </div>

            <div>
              <label htmlFor="endtime" className='text-md sm:text-lg font-semibold'> End Time : </label>
              <input type="text" id='endtime' name="endTime" placeholder='' className=' border-b border-black pl-2 bg-transparent mx-2 focus:outline-none sm:w-[10vw] w-[53vw] text-sm sm:text-md' value={formik.values.endTime} onChange={formik.handleChange} />
            </div>

          </div>

          <h2 className='mt-10 sm:mt-16 mb-4 sm:mb-6 text-lg sm:text-xl font-semibold tracking-wide text-center'>Add Extra Services/Facilities</h2>

          <div className='my-2'>
            <table className='w-full bg-pink-100 rounded-sm sm:rounded-xl shadow-md '>
              <thead>
                <tr className='text-sm sm:text-lg  leading-tight border-b sm:border-b-2 border-black '>
                  <th className='w-[50%] text-center py-4 '>Services / Facilities</th>
                  <th className='w-[20%] text-center py-4 '>Price (&#x20B9;)</th>
                  <th className='w-[30%] text-center py-4 '>Select</th>
                </tr>
              </thead>
              <tbody className=''>
                <tr className=''>
                  <td className='py-3 text-sm sm:text-lg px-4 '> Decoration Services </td>
                  <td className='py-3 text-sm sm:text-lg text-center'> {formatPrice(10000)}</td>
                  <td className='py-3 text-sm sm:text-lg text-center'>
                    <input type="checkbox" name="decoration" className=' border border-green-400 p-2 sm:h-4 sm:w-4 outline-none' onChange={handleServiceChange} />
                  </td>
                </tr>
                <tr className='my-4'>
                  <td className='py-3 text-sm sm:text-lg px-4 '> Food Catering </td>
                  <td className='py-3 text-sm sm:text-lg text-center'>{formatPrice(25000)}</td>
                  <td className='py-3 text-sm sm:text-lg text-center'>
                    <input type="checkbox" name="foodCatering" className='border-none p-2 sm:h-4 sm:w-4' onChange={handleServiceChange} />
                  </td>
                </tr>
                <tr className='my-4'>
                  <td className='py-3 text-sm sm:text-lg px-4'> Entertainment </td>
                  <td className='py-3 text-sm sm:text-lg text-center'>{formatPrice(20000)}</td>
                  <td className='py-3 text-sm sm:text-lg text-center'>
                    <input type="checkbox" name="entertainment" className='border-none p-2 sm:h-4 sm:w-4 bg-red-300' onChange={handleServiceChange} />
                  </td>
                </tr>
                <tr className='my-4'>
                  <td className='py-3 text-sm sm:text-lg px-4'> Photography/Videography </td>
                  <td className='py-3 text-sm sm:text-lg text-center'>{formatPrice(30000)}</td>
                  <td className='py-3 text-sm sm:text-lg text-center'>
                    <input type="checkbox" name="photography" className='border-none p-2 sm:h-4 sm:w-4' onChange={handleServiceChange} />
                  </td>
                </tr>
                <tr className='my-4'>
                  <td className='py-3 text-sm sm:text-lg px-4'> Invitations & Stationery </td>
                  <td className='py-3 text-sm sm:text-lg text-center'>{formatPrice(8000)}</td>
                  <td className='py-3 text-sm sm:text-lg text-center'>
                    <input type="checkbox" name="invitations" className='border-none p-2 sm:h-4 sm:w-4' onChange={handleServiceChange} />
                  </td>
                </tr>
                <tr className='my-4' >
                  <td className='py-3 text-sm sm:text-lg px-4' > Transportation </td>
                  <td className='py-3 text-sm sm:text-lg text-center'>{formatPrice(15000)}</td>
                  <td className='py-3 text-sm sm:text-lg text-center'>
                    <input type="checkbox" id='trans' name="transportation" className='border-none p-2 sm:h-4 sm:w-4' onChange={handleServiceChange} />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className='text-center'>
            <input type="submit" className='bg-[#FF5880] rounded-full px-10 py-2 mt-4 text-white text-lg hover:bg-[#ec4d72] font-semibold cursor-pointer' value="Generate Bill" />
          </div>

        </form>

        {
          (showBill) ?
            <div className=''>
              <div className=' mx-4 h-1 rounded-full bg-zinc-400'></div>

              <div className='px-8 sm:px-24 my-10'>
                <h2 className=' text-xl sm:text-2xl font-semibold  text-center'> Billing Details </h2>

                <div className='mt-8 mb-2'>
                  <span className='font-semibold text-sm sm:text-base'>Booking Date : </span>
                  <span className='text-sm sm:text-md'>{formattedDate}</span>
                </div>

                <div className='my-4 flex flex-col sm:flex-row justify-between'>
                  <div className="w-full sm:w-[49%] text-sm sm:text-base mb-3 sm:mb-0">
                    <div className='mb-2'>
                      <span className='font-semibold'>Order ID : </span>
                      <span>123</span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Name : </span>
                      <span>Xavier Johnson</span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Address : </span>
                      <span>123 AnyDistrict AnyState</span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Email ID : </span>
                      <span>abcde@gmail.com</span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Contact No. : </span>
                      <span>+91 9876541230</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-[45%] text-sm sm:text-base">
                    <div className='mb-2'>
                      <span className='font-semibold'>Event Date : </span>
                      <span> 12-12-2024 </span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Event Time : </span>
                      <span> 8:00AM - 12:00PM </span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Hall Capacity : </span>
                      <span>1200 Members</span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Hall Address : </span>
                      <span> 123 Main Street, Anytown, USA</span>
                    </div>
                    <div className='mb-2'>
                      <span className='font-semibold'>Event Category : </span>
                      <span> Birthday </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className='font-semibold text-lg sm:text-xl mb-3 pt-3 sm:pt-6'>Pricing Details</h2>
                  <table className='w-full sm:w-[55%] my-2'>
                    <tbody>
                      <tr>
                        <td className='w-[50%] sm:w-[80%] text-md sm:text-lg ' > Hall Price</td>
                        <td className='w-[50%] sm:text-left text-right sm:w-[20%]  text-sm sm:text-base' > {formatPrice(12000)} &#x20B9;</td>
                      </tr>
                      {(services.decoration) && <tr>
                        <td className='w-[50%] sm:w-[80%] text-md sm:text-lg' > Decoration Services </td>
                        <td className='w-[50%] sm:text-left text-right sm:w-[20%] text-sm sm:text-base' > {formatPrice(10000)} &#x20B9; </td>
                      </tr>}
                      {(services.foodCatering) && <tr>
                        <td className='w-[50%] sm:w-[80%] text-md sm:text-lg' > Food Catering </td>
                        <td className='w-[50%] sm:text-left text-right sm:w-[20%] text-sm sm:text-base' > {formatPrice(25000)} &#x20B9; </td>
                      </tr>}
                      {(services.entertainment) && <tr>
                        <td className='w-[50%] sm:w-[80%] text-md sm:text-lg' > Entertainment </td>
                        <td className='w-[50%] sm:text-left text-right sm:w-[20%] text-sm sm:text-base' > {formatPrice(20000)} &#x20B9; </td>
                      </tr>}
                      {(services.photography) && <tr>
                        <td className='w-[50%] sm:w-[80%] text-md sm:text-lg' > Photography/Videography Services</td>
                        <td className='w-[50%] sm:text-left text-right sm:w-[20%] text-sm sm:text-base' > {formatPrice(8000)} &#x20B9; </td>
                      </tr>}
                      {(services.transportation) && <tr>
                        <td className='w-[50%] sm:w-[80%] text-md sm:text-lg' > Transportation </td>
                        <td className='w-[50%] sm:text-left text-right sm:w-[20%] text-sm sm:text-base' > {formatPrice(15000)} &#x20B9; </td>
                      </tr>}
                    </tbody>
                    <tr>
                      <th className='text-right text-pink-500 px-10 py-2 uppercase text-md sm:text-lg'>total </th>
                      <td className='font-semibold  sm:text-left text-right text-md sm:text-lg'>{formatPrice(totalPrice)} &#x20B9; </td>
                    </tr>
                  </table>
                </div>

                <div className='my-8'>
                  <h2 className='font-semibold text-lg sm:text-xl mb-3'>Declaration</h2>
                  <h6 className='text-justify text-sm sm:text-base'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I hereby confirm that all information provided in this booking form is accurate and complete. By submitting this form, I acknowledge my agreement to proceed with the booking. I understand and accept the terms and conditions, including the privacy policy, of this website. Any changes or cancellations will be subject to the policies outlined.</h6>

                </div>

                <div className='text-center'>
                  <input type="submit" className='bg-[#FF5880] rounded-full px-10 py-2 mt-4 text-white text-lg hover:bg-[#ec4d72] font-semibold cursor-pointer' value="Click to Pay" />
                </div>

              </div>

            </div> : ""
        }



      </div>





    </div >

  )
}

export default BookingForm