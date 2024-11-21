import React from "react";
import bio1 from "./heartFailureImages/bio1.svg";
import bio2 from "./heartFailureImages/bio2.svg";
import bio3 from "./heartFailureImages/bio3.svg";
import bio4 from "./heartFailureImages/bio4.svg";
import mdt1 from "./heartFailureImages/mdt1.svg";
import mdt2 from "./heartFailureImages/mdt2.svg";
import mdt3 from "./heartFailureImages/mdt3.svg";
import mdt4 from "./heartFailureImages/mdt4.svg";
import bsx1 from "./heartFailureImages/bsx1.svg";
import bsx2 from "./heartFailureImages/bsx2.svg";
import bsx3 from "./heartFailureImages/bsx3.svg";
import bsx4 from "./heartFailureImages/bsx4.svg";
import stj1 from "./heartFailureImages/stj1.svg";
import stj2 from "./heartFailureImages/stj2.svg";
import stj3 from "./heartFailureImages/stj3.svg";
// import { ReactComponent as Bio1Icon } from "./heartFailureImages/bio1.svg";

export default function HeartFailure({selectedPatient}:{selectedPatient: any}) {
    return (
selectedPatient?.manufacturer === "STJ" ?
    <div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Corvue Impedance Monitoring</div>
            <div className="flex justify-center py-4">
                <img src={stj1} alt="STJ" />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Rate</div>
            <div className="flex justify-center py-4">
                <img src={stj2} alt="STJ" />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Patient Activity</div>
            <div className="flex justify-center py-4">
                <img src={stj3} alt="STJ" />
            </div>
        </div>
    </div>
: selectedPatient?.manufacturer === "BSX" ?
    <div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Failure Index</div>
            <div className="flex justify-center py-4">
                <img src={bsx1} alt="BSX" />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Thoracic Impedance</div>
            <div className="flex justify-center py-4">
            <img src={bsx2} alt="BSX"/>           
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Resp. Rate</div>
            <div className="flex justify-center py-4">
                <img src={bsx3} alt="BSX" />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Rate Variability</div>
            <div className="flex justify-center py-4">
                <img src={bsx4} alt="BSX" />
            </div>
        </div> 
    </div>
: selectedPatient?.manufacturer === "BIO" ?
    <div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Thoracic Impedance</div>
            <div className="flex justify-center py-4" 
            >
                <img src={bio1} alt="BIO" style={{ width: "500px" }} />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Thoracic Impedance (Trend)</div>
            <div className="flex justify-center py-4">
                <img src={bio2} alt="BIO"  style={{ width: "900px" }}/>
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Rate</div>
            <div className="flex justify-center py-4">
                <img src={bio3} alt="BIO"  style={{ width: "900px" }}/>
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Rate Variability</div>
            <div className="flex justify-center py-4">
                <img src={bio4} alt="BIO"  style={{ width: "600px" }}/>
            </div>
        </div> 
    </div>
:
    <div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>OptiVol</div>
            <div className="flex justify-center py-4">
                <img src={mdt1} alt="MDT" />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Thoracic Impedance</div>
            <div className="flex justify-center py-4">
            <img src={mdt2} alt="MDT" />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Heart Rate</div>
            <div className="flex justify-center py-4">
            <img src={mdt3} alt="MDT" />
            </div>
        </div>
        <div className="pb-1">
            <div className="text-lg py-1 pl-8 rounded-md" style={{backgroundColor: "#E4ECFF", color: "#004DE1", fontWeight: 700}}>Patient Activity</div>
            <div className="flex justify-center py-4">
            <img src={mdt4} alt="MDT" />
            </div>
        </div> 
    </div>
    )
}