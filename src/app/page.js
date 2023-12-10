import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex w-full h-screen flex-col items-center justify-start p-0 m-0">
      <div className='content flex w-full flex-col items-center justify-between'>
        <Image
          className='mt-2'
          src="/vv.png"
          width={160}
          height={160}
          alt="Picture of the author"
        />

        <div className='flex flex-col sm:w-1/4 w-3/4 mt-24'>
          <h1 className='text-center text-5xl sm:text-6xl listen mt-12'>LISTEN ON</h1>

          <Link className='flex items-center justify-center my-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white hover:bg-[#000]/10 focus:outline-none  font-medium rounded-lg text-sm px-10 py-5 text-center' target='_blank' href="https://soundcloud.com/vfra">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                 <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"
                ><g transform="scale(5.12,5.12)"><path d="M30,11c-3.60156,0 -7,1.78906 -9,4.6875v20.3125h21.5c4.10156,0 7.5,-3.39844 7.5,-7.5c0,-4.10156 -3.39844,-7.5 -7.5,-7.5c-0.5,0 -1,0.08594 -1.5,0.1875c-0.5,-5.69922 -5.19922,-10.1875 -11,-10.1875zM17,16c-0.69922,0 -1.39844,0.08594 -2,0.1875v19.8125h2zM18,16v20h2v-19.5c-0.60156,-0.19922 -1.30078,-0.39844 -2,-0.5zM14,16.5c-0.69922,0.30078 -1.39844,0.60156 -2,1v18.5h2zM11,18.3125c-0.80078,0.69922 -1.5,1.59375 -2,2.59375v15.09375h2zM6.5,22c-0.17578,0.01172 -0.35156,0.04297 -0.5,0.09375v13.8125c0.30078,0.10156 0.69922,0.09375 1,0.09375h1v-13.90625c-0.30078,-0.10156 -0.69922,-0.09375 -1,-0.09375c-0.14844,0 -0.32422,-0.01172 -0.5,0zM5,22.3125c-0.69922,0.19922 -1.39844,0.5 -2,1v11.375c0.60156,0.39844 1.30078,0.80078 2,1zM2,24.09375c-1.19922,1.30078 -2,3.00781 -2,4.90625c0,1.89844 0.80078,3.60547 2,4.90625z"></path></g></g>
                </svg>                       
          </Link>

          <Link className='inline-flex items-center justify-center my-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white hover:bg-[#000]/10 focus:outline-none  font-medium rounded-lg text-sm px-10 py-5 text-center' target='_blank' href="https://www.youtube.com/@VFRAXX">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
               <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
               </svg>                       
          </Link>





          <button type="button" class="inline-flex items-center justify-center my-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white hover:bg-[#000]/10 focus:outline-none  font-medium rounded-lg text-sm px-10 py-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M25.009,1.982c-12.687,0 -23.009,10.322 -23.009,23.009c0,12.687 10.322,23.009 23.009,23.009c12.687,0 23.009,-10.321 23.009,-23.009c0,-12.688 -10.322,-23.009 -23.009,-23.009zM34.748,35.333c-0.289,0.434 -0.765,0.668 -1.25,0.668c-0.286,0 -0.575,-0.081 -0.831,-0.252c-2.473,-1.649 -6.667,-2.749 -10.167,-2.748c-3.714,0.002 -6.498,0.914 -6.526,0.923c-0.784,0.266 -1.635,-0.162 -1.897,-0.948c-0.262,-0.786 0.163,-1.636 0.949,-1.897c0.132,-0.044 3.279,-1.075 7.474,-1.077c3.5,-0.002 8.368,0.942 11.832,3.251c0.69,0.46 0.876,1.391 0.416,2.08zM37.74,29.193c-0.325,0.522 -0.886,0.809 -1.459,0.809c-0.31,0 -0.624,-0.083 -0.906,-0.26c-4.484,-2.794 -9.092,-3.385 -13.062,-3.35c-4.482,0.04 -8.066,0.895 -8.127,0.913c-0.907,0.258 -1.861,-0.272 -2.12,-1.183c-0.259,-0.913 0.272,-1.862 1.184,-2.12c0.277,-0.079 3.854,-0.959 8.751,-1c4.465,-0.037 10.029,0.61 15.191,3.826c0.803,0.5 1.05,1.56 0.548,2.365zM40.725,22.013c-0.373,0.634 -1.041,0.987 -1.727,0.987c-0.344,0 -0.692,-0.089 -1.011,-0.275c-5.226,-3.068 -11.58,-3.719 -15.99,-3.725c-0.021,0 -0.042,0 -0.063,0c-5.333,0 -9.44,0.938 -9.481,0.948c-1.078,0.247 -2.151,-0.419 -2.401,-1.495c-0.25,-1.075 0.417,-2.149 1.492,-2.4c0.185,-0.043 4.573,-1.053 10.39,-1.053c0.023,0 0.046,0 0.069,0c4.905,0.007 12.011,0.753 18.01,4.275c0.952,0.56 1.271,1.786 0.712,2.738z"></path></g></g>
            </svg>                    
          </button>

          <button type="button" class="inline-flex items-center justify-center my-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white hover:bg-[#000]/10 focus:outline-none  font-medium rounded-lg text-sm px-10 py-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M44.52734,34.75c-1.07812,2.39453 -1.59766,3.46484 -2.98437,5.57813c-1.94141,2.95313 -4.67969,6.64063 -8.0625,6.66406c-3.01172,0.02734 -3.78906,-1.96484 -7.87891,-1.92969c-4.08594,0.01953 -4.9375,1.96875 -7.95312,1.9375c-3.38672,-0.03125 -5.97656,-3.35156 -7.91797,-6.30078c-5.42969,-8.26953 -6.00391,-17.96484 -2.64844,-23.12109c2.375,-3.65625 6.12891,-5.80469 9.65625,-5.80469c3.59375,0 5.85156,1.97266 8.82031,1.97266c2.88281,0 4.63672,-1.97656 8.79297,-1.97656c3.14063,0 6.46094,1.71094 8.83594,4.66406c-7.76562,4.25781 -6.50391,15.34766 1.33984,18.31641zM31.19531,8.46875c1.51172,-1.94141 2.66016,-4.67969 2.24219,-7.46875c-2.46484,0.16797 -5.34766,1.74219 -7.03125,3.78125c-1.52734,1.85938 -2.79297,4.61719 -2.30078,7.28516c2.69141,0.08594 5.47656,-1.51953 7.08984,-3.59766z"></path></g></g>
            </svg>               
          </button>
       

        </div>

        <div className='text-[7px] sm:text-[10px] text-center font-semibold uppercase footer mt-8 mb-1 transition'>
          
          <span className='hover:text-[#fff]/50'>©2024 XXX Records</span>   <span className='hover:text-[#fff]/50'>Privacy Policy</span> <span className='hover:text-[#fff]/50'>Terms Of Use</span>  <span className='hover:text-[#fff]/50'>Ad Choices</span> <span className='hover:text-[#fff]/50'>Cookies Policy</span>  <br />
          <span className='hover:text-[#fff]/50'>Do Not Sell or Share My Personal Information</span> 

        </div>

      </div>




    </main>
  )
}
