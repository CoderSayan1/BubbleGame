*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    height: 100%;
    width: 100%;
}

#main{
    height: 100%;
    width: 100%;
    background-color: rgb(240, 223, 201);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#panel{
    height: 80%;
    width: 80%;
    margin-top: 30px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 4.8px 9.6px 9.6px hsl(0deg 0% 0% / 0.35);
}

#ptop{
    height: 100px;
    width: 100%;
    background-color: rgb(205, 157, 98);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20%;
}

.elem{
    display: flex;
    align-items: center;
    gap: 20px;
}

.box{
    background-color: white;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 20px;
    border-radius: 5px;
}

#pbottom{
    height: calc(100% - 100px);
    width: 100%;
    /* background-color: brown; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
}

.bubble{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: rgb(184, 152, 214);
    color: #fff;
    font-size: 22px;
    font-weight: 300;
}
.bubble:hover{
    background-color: rgb(129, 91, 165);
    cursor: pointer;
}

#btn{
    margin: 20px;
    padding: 1rem 1.25rem;
    font-size: 22px;
    font-weight: 550;
    border-radius: 25px;
    border: none;
    background-color: rgb(145, 216, 198);
}
#btn:hover{
    background-color: rgb(73, 169, 145);
    box-shadow:  inset 250px 250px 0 rgb(67, 192, 194);
    cursor: pointer;
}

@media only screen and (max-width: 786px){
    #ptop{
        padding: 0 10%;
    }
}
@media only screen and (max-width: 618px){
    #ptop{
        padding: 0 5%;
    }
    .elem{
        gap: 15px;
    }
}
@media only screen and (max-width: 521px){
    .box{
        padding: 10px 15px;
        font-size: 18px;
        border-radius: 5px;
    }
    .elem{
        display: flex;
        flex-direction: column;
    }
}
