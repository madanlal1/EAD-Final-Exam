function Home()
{
        // const data = () =>{
        //     axios.post(`http://localhost:8000/`,{headers:{'Content-Type': 'application/json',
        //     'Authorization': localStorage.getItem("User")}}).then(res=>console.log(res.data))
        //     navigate('/')
        // }

    return (
        <>

            <br/>
            <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
            +
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Favourites</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input id="myText" name="myText" type="text" placeholder="Paste your link here..."/>
                </div>
                <div class="modal-footer">
                    <button type="button" onClick={() => alert(document.getElementById("myText").value)} class="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
            </div> 

        </>
    )
    
}
export default Home