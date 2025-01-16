
const showLoading = (isVisible) => {
    document.getElementById("loadingIndicator").hidden = !isVisible;
  };
  
  
  document.getElementById("getDiagnosis").addEventListener("click", () => {
    const symptoms = document.getElementById("symptoms").value.toLowerCase();
    const resultDiv = document.getElementById("diagnosisResult");
    const feedbackSection = document.getElementById("feedbackSection");
  
    if (!symptoms) {
      alert("Please describe your symptoms.");
      return;
    }
  
    showLoading(true);
    resultDiv.textContent = "";
    feedbackSection.hidden = true;
  
    let diagnosis = "";
  
    if ((symptoms.includes("fever") && symptoms.includes("cough")) || symptoms.includes("runny nose")) {
        diagnosis = "It could be a common cold or flu. Please consult a doctor.";
      }
  
      // Migraine, Dehydration, or Tension Headache
      else if (symptoms.includes("headache") && (symptoms.includes("dizziness") || symptoms.includes("nausea"))) {
        diagnosis = "This could be a sign of dehydration, a migraine, or a tension headache. Make sure to stay hydrated.";
      }
  
      // Chest pain and shortness of breath
      else if ((symptoms.includes("chest pain") && symptoms.includes("shortness of breath")) || symptoms.includes("pain radiating to arm")) {
        diagnosis = "This could be a serious issue, possibly related to your heart or lungs. Please seek immediate medical attention.";
      }
  
      // Sore throat and difficulty swallowing
      else if (symptoms.includes("sore throat") && symptoms.includes("difficulty swallowing")) {
        diagnosis = "This may indicate a throat infection, such as strep throat. It's important to consult a healthcare professional.";
      }
  
      // Stomach pain with nausea or vomiting
      else if (symptoms.includes("stomach pain") && (symptoms.includes("nausea") || symptoms.includes("vomiting"))) {
        diagnosis = "This could be food poisoning or a stomach virus. Stay hydrated and consult a doctor if symptoms persist.";
      }
  
      // Joint pain, swelling, and redness
      else if (symptoms.includes("joint pain") && symptoms.includes("swelling") && symptoms.includes("redness")) {
        diagnosis = "This may be a sign of arthritis or an infection in the joint. Please visit a healthcare provider for an examination.";
      }
  
      // Fatigue with unexplained weight loss
      else if (symptoms.includes("fatigue") && symptoms.includes("unexplained weight loss")) {
        diagnosis = "This could be a sign of a thyroid issue or other serious health conditions. It's best to see a doctor for further tests.";
      }
  
      // Rash and fever
      else if (symptoms.includes("rash") && symptoms.includes("fever")) {
        diagnosis = "This may indicate a viral infection such as measles or chickenpox. Please seek medical attention for proper diagnosis.";
      }
  
      // Painful urination with fever
      else if (symptoms.includes("painful urination") && symptoms.includes("fever")) {
        diagnosis = "This could indicate a urinary tract infection (UTI) or a kidney infection. A doctor will prescribe antibiotics if necessary.";
      }
  
      // Persistent cough, night sweats, and weight loss
      else if (symptoms.includes("persistent cough") && symptoms.includes("night sweats") && symptoms.includes("weight loss")) {
        diagnosis = "This could be a sign of tuberculosis (TB). You should consult with a healthcare provider immediately.";
      }
  
      // Diarrhea, fever, and bloody stools
      else if (symptoms.includes("diarrhea") && symptoms.includes("fever") && symptoms.includes("bloody stools")) {
        diagnosis = "This could be a sign of an intestinal infection or inflammatory bowel disease (IBD). Please seek medical attention.";
      }
  
      // Swollen lymph nodes with fatigue
      else if (symptoms.includes("swollen lymph nodes") && symptoms.includes("fatigue")) {
        diagnosis = "This could be a sign of an infection or lymphoma. It's important to consult a healthcare professional for further evaluation.";
      }
  
      // Add more conditions and diseases...
      else if (symptoms.includes("abdominal pain") && symptoms.includes("fever")) {
        diagnosis = "This could indicate appendicitis or an infection in the abdominal region. Immediate consultation with a doctor is advised.";
      }
  
      else if (symptoms.includes("bleeding gums") && symptoms.includes("bruising")) {
        diagnosis = "This may be a sign of a bleeding disorder such as thrombocytopenia. Please consult with a doctor.";
      }
  
      else if (symptoms.includes("swollen ankles") && symptoms.includes("shortness of breath")) {
        diagnosis = "This could be a sign of heart failure or deep vein thrombosis. Immediate consultation with a healthcare provider is needed.";
      }
  
      else if (symptoms.includes("shaking") && symptoms.includes("sweating")) {
        diagnosis = "This could be a sign of hypoglycemia or a panic attack. It's important to monitor your blood sugar levels or consult with a doctor.";
      }
  
      else if (symptoms.includes("yellow skin") && symptoms.includes("dark urine")) {
        diagnosis = "This may indicate liver disease, such as hepatitis. Immediate medical attention is necessary.";
      }
  
      else if (symptoms.includes("difficulty breathing") && symptoms.includes("wheezing")) {
        diagnosis = "This could be asthma or a respiratory infection. Please seek medical help for further treatment.";
      }
  
      else if (symptoms.includes("stiff neck") && symptoms.includes("fever")) {
        diagnosis = "This could be a sign of meningitis. Immediate medical attention is required.";
      }
  
      else if (symptoms.includes("severe headache") && symptoms.includes("nausea") && symptoms.includes("vomiting")) {
        diagnosis = "This may indicate a migraine or a serious neurological issue. Consult a healthcare provider.";
      }
  
      else if (symptoms.includes("weight loss") && symptoms.includes("fever") && symptoms.includes("night sweats")) {
        diagnosis = "This could indicate cancer, particularly lymphoma. A healthcare provider should be consulted immediately.";
  
      } else {
        diagnosis = "The symptoms you mentioned could indicate a variety of conditions. It’s best to consult with a healthcare professional.";
      }
  
    resultDiv.textContent = diagnosis;
    feedbackSection.hidden = false;
  

    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(diagnosis);
    synth.speak(utterThis);
  
    showLoading(false);
  });
  
  
  document.getElementById("startVoiceInput").addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
  
    recognition.onresult = (event) => {
      document.getElementById("symptoms").value = event.results[0][0].transcript;
    };
  
    recognition.onerror = () => {
      alert("Voice recognition failed. Try again.");
    };
  
    recognition.start();
  });
  

  document.getElementById("feedbackYes").addEventListener("click", () => {
    alert("Thank you for your feedback!");
    document.getElementById("feedbackSection").hidden = true;
  });
  
  document.getElementById("feedbackNo").addEventListener("click", () => {
    alert("Thank you! We'll work to improve.");
    document.getElementById("feedbackSection").hidden = true;
  });
  
