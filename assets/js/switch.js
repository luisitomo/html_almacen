switch (new Date().getDay()) { 
    case 6:
        var text = "Hoy es sabado";
        break;
    case 3:
        var text = "Hoy es domingo";
        break;
    default:
        var text = "Hoy es un dia como cualquier otro dia excepto sabado y Domingo";
}

document.write(text);