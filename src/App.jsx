import './App.css'
import RandomUser from './assets/RandomUser';
// import axios from "axios";

function App() {
// const [userDetails,setUserDetails]=useState(null)
// const fetchUserDetails= async()=>{
//   try{
//       const response= await axios.get('https://dummyjson.com/users')
//       setUserDetails(response.data);
//   }catch(error){
//     console.log(error);
//   }
// };
// //  fetchUserDetails()
//  console.log(userDetails);
// const [data,setData]=useState(null)
// useEffect (()=>{
//   const fetchData= async()=>{
//     const respones= await fetch('https://dummyjson.com/users')
//     const newData =await respones.json()
//     setData(newData)
//   }
//   fetchData()
// },[])
// if(data){
//   console.log(data);
// }else{
//   return null
// }
// const refresh=()=>{
// window.location.reload()
// }
return (<>
<RandomUser>
  
</RandomUser>
</>
//   <div
//     style={{ width: "100%", height: "100vh" }}
//     className="d-flex justify-content-center align-items-center"
//   >
//     <div style={{ width: "1000px" }} className="bg-warning p-5 rounded">
      
//       { data && data.map((datas,id)=>(

//           <>
//               <Row>
//               <Col>
//               <div key={id} className="ms-5">
//                   <img src="https://robohash.org/Terry.png?set=set4" alt="" />
//                   <h1>{datas.firstName}</h1>
//                   <h4 className="ms-5">{datas.gender}</h4>
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-6 mt-5">
//                     <div>
//                       <p className="fw-bolder text-light">Birth Date</p>
//                       <h6>{datas.birthDate}</h6>
//                     </div>
//                     <div className="mt-5">
//                       <p className="fw-bolder text-light">Weight</p>
//                       <h6>{datas.weight}</h6>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 mt-5 ms1-1">
//                     <div>
//                       <p className="fw-bolder text-light">Age</p>
//                       <h6>{datas.age}</h6>
//                     </div>
//                     <div className="mt-5">
//                       <p className="fw-bolder text-light">Height</p>
//                       <h6>{datas.height}</h6>
//                     </div>
//                   </div>
//                   <div>
//                     <Button
//                       onClick={refresh}
//                       className="ms-5 mt-5"
//                       variant="success"
//                     >
//                       REFRESH
//                     </Button>{" "}
//                   </div>
//                 </div>
//               </Col>
               
              
//               <Col>
//               <div className="mb-5">
//                   <h4>Home Address</h4>
//                   <h6>{datas.address.address}</h6>
//                 </div>
//                 <div className="mt-5 mb-5">
//                   <h4>Mobile Phone</h4>
//                   <h6>{datas.phone}</h6>
//                 </div>
//                 <div className="mt-5 mb-5">
//                   <h4>Company</h4>
//                   <h6>{datas.company.address.address}</h6>
//                 </div>
//                 <div className="mt-5 mb-5">
//                   <h4>Job Title</h4>
//                   <h6>{datas.department}</h6>
//                 </div>
//                 <div className="mt-5 mb-5">
//                   <h4>Email</h4>
//                   <h6>{datas.email}</h6>
//                 </div>
//               </Col>
                
              
//             </Row>
//           </>
//       ))
              
      
  
//       }
//     </div>
//   </div>
 );
      }
export default App
