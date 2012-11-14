/**
 * Created by JetBrains WebStorm.
 * User: Ivan
 * Date: 10.12.11
 * Time: 12:43
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {
    var i;
    for (i in document.images) {
        if (document.images[i].src) {
            var imgSrc = document.images[i].src;
            if (imgSrc.substr(imgSrc.length - 4) === '.png' || imgSrc.substr(imgSrc.length - 4) === '.PNG') {
                document.images[i].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + imgSrc + "')";
            }
        }
    }

});

