// Context: Photoshop

#target photoshop 
var lineWidth = 2
var userColor = true;

if(userColor){
    app.showColorPicker()
    }

var cRed = foregroundColor.rgb.red;
var cGreen = foregroundColor.rgb.green;
var cBlue = foregroundColor.rgb.blue;

app.preferences.rulerUnits = Units.PIXELS;
var doc = activeDocument
var g = doc.guides

for(var i=0;i<g.length;i++){
    var loc = g[i].coordinate.value

    if(g[i].direction == 'Direction.HORIZONTAL'){
        makeLine (loc-lineWidth/2, 0, loc+lineWidth/2, doc.width)        
        }
    else{
        makeLine (0, loc-lineWidth/2, doc.height, loc+lineWidth/2)
        }
    }

function makeLine(topS, leftS, bottomS, rightS ){
    
var idMk = charIDToTypeID( "Mk  " );
    var desc38 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref3.putClass( idcontentLayer );
    desc38.putReference( idnull, ref3 );
    var idUsng = charIDToTypeID( "Usng" );
        var desc39 = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
            var desc40 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
                var desc41 = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                desc41.putDouble( idRd, cRed );
                var idGrn = charIDToTypeID( "Grn " );
                desc41.putDouble( idGrn, cGreen );
                var idBl = charIDToTypeID( "Bl  " );
                desc41.putDouble( idBl, cBlue );
            var idRGBC = charIDToTypeID( "RGBC" );
            desc40.putObject( idClr, idRGBC, desc41 );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc39.putObject( idType, idsolidColorLayer, desc40 );
        var idShp = charIDToTypeID( "Shp " );
            var desc42 = new ActionDescriptor();
            var idunitValueQuadVersion = stringIDToTypeID( "unitValueQuadVersion" );
            desc42.putInteger( idunitValueQuadVersion, 1 );
            var idTop = charIDToTypeID( "Top " );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idTop, idPxl,topS);
            var idLeft = charIDToTypeID( "Left" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idLeft, idPxl, leftS );
            var idBtom = charIDToTypeID( "Btom" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idBtom, idPxl, bottomS );
            var idRght = charIDToTypeID( "Rght" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idRght, idPxl, rightS );
            var idtopRight = stringIDToTypeID( "topRight" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idtopRight, idPxl, 0.000000 );
            var idtopLeft = stringIDToTypeID( "topLeft" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idtopLeft, idPxl, 0.000000 );
            var idbottomLeft = stringIDToTypeID( "bottomLeft" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idbottomLeft, idPxl, 0.000000 );
            var idbottomRight = stringIDToTypeID( "bottomRight" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc42.putUnitDouble( idbottomRight, idPxl, 0.000000 );
        var idRctn = charIDToTypeID( "Rctn" );
        desc39.putObject( idShp, idRctn, desc42 );
        var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
            var desc43 = new ActionDescriptor();
            var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
            desc43.putInteger( idstrokeStyleVersion, 2 );
            var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" );
            desc43.putBoolean( idstrokeEnabled, false );
            var idfillEnabled = stringIDToTypeID( "fillEnabled" );
            desc43.putBoolean( idfillEnabled, true );
            var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc43.putUnitDouble( idstrokeStyleLineWidth, idPxl, 1.000000 );
            var idstrokeStyleLineDashOffset = stringIDToTypeID( "strokeStyleLineDashOffset" );
            var idPnt = charIDToTypeID( "#Pnt" );
            desc43.putUnitDouble( idstrokeStyleLineDashOffset, idPnt, 0.000000 );
            var idstrokeStyleMiterLimit = stringIDToTypeID( "strokeStyleMiterLimit" );
            desc43.putDouble( idstrokeStyleMiterLimit, 100.000000 );
            var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
            var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
            var idstrokeStyleButtCap = stringIDToTypeID( "strokeStyleButtCap" );
            desc43.putEnumerated( idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap );
            var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
            var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
            var idstrokeStyleMiterJoin = stringIDToTypeID( "strokeStyleMiterJoin" );
            desc43.putEnumerated( idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin );
            var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
            var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
            var idstrokeStyleAlignCenter = stringIDToTypeID( "strokeStyleAlignCenter" );
            desc43.putEnumerated( idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignCenter );
            var idstrokeStyleScaleLock = stringIDToTypeID( "strokeStyleScaleLock" );
            desc43.putBoolean( idstrokeStyleScaleLock, false );
            var idstrokeStyleStrokeAdjust = stringIDToTypeID( "strokeStyleStrokeAdjust" );
            desc43.putBoolean( idstrokeStyleStrokeAdjust, false );
            var idstrokeStyleLineDashSet = stringIDToTypeID( "strokeStyleLineDashSet" );
                var list3 = new ActionList();
            desc43.putList( idstrokeStyleLineDashSet, list3 );
            var idstrokeStyleBlendMode = stringIDToTypeID( "strokeStyleBlendMode" );
            var idBlnM = charIDToTypeID( "BlnM" );
            var idNrml = charIDToTypeID( "Nrml" );
            desc43.putEnumerated( idstrokeStyleBlendMode, idBlnM, idNrml );
            var idstrokeStyleOpacity = stringIDToTypeID( "strokeStyleOpacity" );
            var idPrc = charIDToTypeID( "#Prc" );
            desc43.putUnitDouble( idstrokeStyleOpacity, idPrc, 100.000000 );
            var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
                var desc44 = new ActionDescriptor();
                var idClr = charIDToTypeID( "Clr " );
                    var desc45 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc45.putDouble( idRd, cRed );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc45.putDouble( idGrn, cGreen );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc45.putDouble( idBl, cBlue );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc44.putObject( idClr, idRGBC, desc45 );
            var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
            desc43.putObject( idstrokeStyleContent, idsolidColorLayer, desc44 );
            var idstrokeStyleResolution = stringIDToTypeID( "strokeStyleResolution" );
            desc43.putDouble( idstrokeStyleResolution, 300.000000 );
        var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
        desc39.putObject( idstrokeStyle, idstrokeStyle, desc43 );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc38.putObject( idUsng, idcontentLayer, desc39 );
    var idLyrI = charIDToTypeID( "LyrI" );
    desc38.putInteger( idLyrI, 28 );
executeAction( idMk, desc38, DialogModes.NO );
    }