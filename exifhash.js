var data = "New File Contents";
var imageHash = require("image-hash");
var fs = require("fs");
const exiftool = require("exiftool-vendored").exiftool
 
var exifdata = exiftool
    .read("image.jpg")
    .then((tags) =>

        console.log(
           `
Image Details
---------------
FileName: ${tags.FileName}
ExifImageWidth: ${tags.ExifImageWidth}
ExifImageHeight: ${tags.ExifImageHeight}
FileTypeExtension: ${tags.FileTypeExtension}
DateTimeOriginal: ${tags.DateTimeOriginal.rawValue}
FileCreateDate: ${tags.FileCreateDate.rawValue}

Camera Details
---------------
Make: ${tags.Make}
Model: ${tags.Model}
DeviceManufacturer: ${tags.DeviceManufacturer}

Photograph Details
---------------
ShutterSpeed: ${tags.ShutterSpeed}
Aperture: ${tags.Aperture}
ISO: ${tags.ISO}
Megapixels: ${tags.Megapixels}
FocalLength: ${tags.FocalLength}
ExposureTime: ${tags.ExposureTime}
SceneType: ${tags.SceneType}

Geographic Details
---------------
LAT: ${tags.GPSLatitude}
LON: ${tags.GPSLongitude}`
              )        
    )
.catch(err => console.error("Something terrible happened: ", err))
return(exifdata)
console.log(exifdata)

imageHash(("image.jpg"), 16, true, (error, data) => {
    if (error) throw error;
    console.log(data);
    // 'data' is the md5
    fs.writeFile("temp.txt", data, (err) => {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        //console.log(`${this}`);
        return;
    });
});
