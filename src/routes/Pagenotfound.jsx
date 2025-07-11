import { Link } from "react-router";
function PageNotFound(){
    return(
    <>
    <div style={{textAlign:'center'}}>
    <h1>Page Not found</h1>
    <div>
    <Link to='/'>Go back to home</Link>
    </div>
    <img style={{width:'50%'}} src="https://imgs.search.brave.com/L4jqNV_S8fAj97sX11IA77dOcB4oIAvBmjKR1GCIcTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcGFnZS1mb3Vu/ZC00MDQtZXJyb3It/Y29uY2VwdC1pbGx1/c3RyYXRpb25fMjcw/MTU4LTI5NC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw"/>
    </div>
    </>
    )
}
export default PageNotFound;


