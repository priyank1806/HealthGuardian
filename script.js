const recommendations = {
    "diabetes": {
        medication: "Metformin, Insulin, Sulfonylureas",
        measures: "Regular exercise, Balanced diet, Avoid sugary foods"
    },
    "sleeping": {
        medication: "Zolpidem, Melatonin, Valerian root",
        measures: "Maintain regular sleep schedule, Avoid caffeine before bed"
    },
    "cold and cough": {
        medication: "Paracetamol, Ibuprofen, Cough syrups",
        measures: "Drink warm fluids, Rest, Stay hydrated"
    },
    "gas": {
        medication: "Simethicone, Ranitidine, Antacids",
        measures: "Eat slowly, Avoid carbonated drinks, Regular meals"
    },
    "vomit": {
        medication: "Domperidone, Ondansetron, Pepto-Bismol",
        measures: "Eat bland foods, Drink water in small sips, Avoid fatty foods"
    },
    "pneumonia": {
        medication: "Antibiotics (Amoxicillin), Cough suppressants",
        measures: "Get plenty of rest, Stay hydrated, Use a humidifier"
    },
    "heart diseases": {
        medication: "Aspirin, Beta-blockers, ACE inhibitors",
        measures: "Exercise regularly, Eat heart-healthy food, Quit smoking"
    },
    "tuberculosis": {
        medication: "Rifampicin, Isoniazid, Pyrazinamide",
        measures: "Isolate to prevent spread, Complete full antibiotic course"
    },
    "diarrhea": {
        medication: "Oral Rehydration Salts (ORS), Loperamide",
        measures: "Stay hydrated, Avoid greasy foods, Consume probiotics"
    },
    "cholera": {
        medication: "Antibiotics (Doxycycline), ORS",
        measures: "Drink purified water, Maintain good hygiene, Avoid raw foods"
    },
    "malaria": {
        medication: "Chloroquine, Mefloquine, Artemisinin-based drugs",
        measures: "Use mosquito nets, Apply insect repellent, Avoid mosquito bites"
    },
    "flu": {
        medication: "Antiviral Medications, Paracetamol",
        measures: "Rest, stay hydrated, and consult a doctor if symptoms worsen."
    },
    "dengue": {
        medication: "Pain Relievers (Acetaminophen), Hydration",
        measures: "Rest and avoid aspirin or NSAIDs."
    },
    "chickenpox": {
        medication: "Antihistamines, Calamine Lotion",
        measures: "Stay cool and avoid scratching."
    },
    "measles": {
        medication: "Vitamin A supplements, Pain relievers",
        measures: "Rest and stay hydrated."
    },
    "mumps": {
        medication: "Pain relievers, Ice packs",
        measures: "Rest and avoid sour foods."
    },
    "rubella": {
        medication: "Pain relievers, Hydration",
        measures: "Rest and consult a doctor."
    },
    "bronchitis": {
        medication: "Cough Medicine, Inhalers",
        measures: "Stay hydrated and avoid irritants."
    },
    "asthma": {
        medication: "Inhalers, Bronchodilators",
        measures: "Avoid triggers and use a peak flow meter."
    },
    "sinusitis": {
        medication: "Decongestants, Pain relievers",
        measures: "Steam inhalation and nasal saline irrigation."
    },
    "tonsillitis": {
        medication: "Pain relievers, Antibiotics (if bacterial)",
        measures: "Gargle with salt water and stay hydrated."
    },
    "ear_infection": {
        medication: "Antibiotics (if bacterial), Pain relievers",
        measures: "Warm compress and rest."
    },
    "strep_throat": {
        medication: "Antibiotics, Pain relievers",
        measures: "Gargle salt water and stay hydrated."
    },
    "hay_fever": {
        medication: "Antihistamines, Nasal sprays",
        measures: "Avoid allergens and keep windows closed."
    },
    "whooping_cough": {
        medication: "Antibiotics, Cough medicine",
        measures: "Stay hydrated and rest."
    },
    "scarlet_fever": {
    medication: "Antibiotics, Pain relievers",
    measures: "Stay hydrated and rest."
    },
    "hepatitis_A": {
        medication: "Supportive care, Antivirals in severe cases",
        measures: "Stay hydrated and rest."
    },
    "hepatitis_B": {
        medication: "Antivirals, Supportive care",
        measures: "Avoid alcohol and consult a doctor."
    },
    "hepatitis_C": {
        medication: "Antivirals",
        measures: "Avoid alcohol and consult a doctor."
    },
    "jaundice": {
        medication: "Depends on the cause",
        measures: "Stay hydrated and rest."
    },
    "dysentery": {
        medication: "Antibiotics, Oral Rehydration Solutions",
        measures: "Stay hydrated and consult a doctor."
    },
    "typhoid": {
        medication: "Antibiotics, Supportive care",
        measures: "Stay hydrated and consult a doctor."
    },
    "stomach_flu": {
        medication: "Antiemetics, Oral Rehydration Solutions",
        measures: "Stay hydrated and rest."
    },
    "food_poisoning": {
        medication: "Hydration, Antiemetics",
        measures: "Stay hydrated and rest."
    },
    "appendicitis": {
        medication: "Surgery, Pain relievers",
        measures: "Seek immediate medical attention."
    },
    "ibs": {
        medication: "Antispasmodics, Laxatives",
        measures: "Dietary changes and stress management."
    },
    "acid_reflux": {
        medication: "Antacids, Proton Pump Inhibitors",
        measures: "Avoid trigger foods and eat smaller meals."
    },
    "peptic_ulcer": {
        medication: "Proton Pump Inhibitors, Antibiotics",
        measures: "Avoid NSAIDs and alcohol."
    },
    "constipation": {
        medication: "Laxatives, Stool softeners",
        measures: "Increase fiber intake and stay hydrated."
    },
    "piles": {
        medication: "Topical treatments, Pain relievers",
        measures: "Increase fiber intake and stay hydrated."
    },
    "crohns": {
        medication: "Anti-inflammatory drugs, Immunosuppressants",
        measures: "Dietary changes and stress management."
    },
    "ulcerative_colitis": {
        medication: "Anti-inflammatory drugs, Immunosuppressants",
        measures: "Dietary changes and regular check-ups."
    },
    "celiac": {
        medication: "Gluten-free diet, Nutritional supplements",
        measures: "Strictly avoid gluten-containing foods."
    },
    "lactose_intolerance": {
        medication: "Lactase supplements, Avoid dairy",
        measures: "Consider lactose-free alternatives."
    },
    "gallstones": {
        medication: "Pain relievers, Surgery (if severe)",
        measures: "Maintain a healthy diet."
    },
    "pancreatitis": {
        medication: "Pain relievers, Avoid alcohol",
        measures: "Seek medical advice and consider dietary changes."
    },
    "liver_cirrhosis": {
        medication: "Supportive care, Medications for symptoms",
        measures: "Avoid alcohol and consult a doctor."
    },
    "fatty_liver": {
        medication: "Dietary changes, Exercise",
        measures: "Maintain a healthy weight."
    },
    "kidney_stones": {
        medication: "Pain relievers, Alpha blockers",
        measures: "Stay hydrated and consult a doctor."
    },
    "uti": {
        medication: "Antibiotics, Pain relievers",
        measures: "Drink plenty of water."
    },
    "cystitis": {
        medication: "Antibiotics, Pain relievers",
        measures: "Stay hydrated and consult a doctor."
    },
    "bladder_infection": {
        medication: "Antibiotics, Pain relievers",
        measures: "Stay hydrated and consult a doctor."
    },
    "pyelonephritis": {
        medication: "Antibiotics, Pain relievers",
        measures: "Stay hydrated and consult a doctor."
    },
    "prostate_enlargement": {
        medication: "Alpha blockers, 5-alpha-reductase inhibitors",
        measures: "Regular check-ups and healthy lifestyle."
    },
    "prostate_cancer": {
        medication: "Hormone therapy, Chemotherapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "kidney_failure": {
        medication: "Dialysis, Medications",
        measures: "Consult a nephrologist and manage diet."
    },
    "heart_disease": {
        medication: "Beta-blockers, ACE inhibitors",
        measures: "Lifestyle changes and regular exercise."
    },
    "high_blood_pressure": {
    medication: "Antihypertensives, Diuretics",
    measures: "Low-sodium diet and regular exercise."
    },
    "low_blood_pressure": {
        medication: "Fludrocortisone, Increased salt intake",
        measures: "Stay hydrated and consult a doctor."
    },
    "angina": {
        medication: "Nitroglycerin, Beta-blockers",
        measures: "Lifestyle changes and stress management."
    },
    "arrhythmia": {
        medication: "Antiarrhythmics, Blood thinners",
        measures: "Regular check-ups and avoid triggers."
    },
    "atherosclerosis": {
        medication: "Statins, Antihypertensives",
        measures: "Healthy diet and regular exercise."
    },
    "dvt": {
        medication: "Anticoagulants, Compression stockings",
        measures: "Avoid long periods of inactivity."
    },
    "anemia": {
        medication: "Iron supplements, Vitamin B12 shots",
        measures: "Increase iron-rich foods in the diet."
    },
    "iron_deficiency": {
        medication: "Iron supplements",
        measures: "Increase iron-rich foods in the diet."
    },
    "thalassemia": {
        medication: "Blood transfusions, Folic acid",
        measures: "Regular check-ups and consult a doctor."
    },
    "sickle_cell": {
        medication: "Pain relievers, Hydroxyurea",
        measures: "Stay hydrated and manage stress."
    },
    "hemophilia": {
        medication: "Factor replacement therapy",
        measures: "Avoid injuries and regular check-ups."
    },
    "leukemia": {
        medication: "Chemotherapy, Targeted therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "lymphoma": {
        medication: "Chemotherapy, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "multiple_myeloma": {
        medication: "Chemotherapy, Steroids",
        measures: "Regular check-ups and consult a doctor."
    },
    "breast_cancer": {
        medication: "Chemotherapy, Hormone therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "lung_cancer": {
        medication: "Chemotherapy, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "skin_cancer": {
        medication: "Surgery, Radiation therapy",
        measures: "Regular check-ups and avoid sun exposure."
    },
    "ovarian_cancer": {
        medication: "Chemotherapy, Targeted therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "cervical_cancer": {
        medication: "Chemotherapy, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "colorectal_cancer": {
        medication: "Chemotherapy, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "pancreatic_cancer": {
        medication: "Chemotherapy, Targeted therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "esophageal_cancer": {
        medication: "Chemotherapy, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "brain_tumor": {
        medication: "Surgery, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "bone_cancer": {
        medication: "Chemotherapy, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "mouth_cancer": {
        medication: "Surgery, Radiation therapy",
        measures: "Regular check-ups and avoid tobacco."
    },
    "throat_cancer": {
        medication: "Chemotherapy, Radiation therapy",
        measures: "Regular check-ups and avoid tobacco."
    },
    "thyroid_cancer": {
        medication: "Surgery, Radiation therapy",
        measures: "Regular check-ups and consult a doctor."
    },
    "oral_thrush": {
        medication: "Antifungal medications",
        measures: "Maintain good oral hygiene."
    },
    "herpes_simplex": {
        medication: "Antiviral medications",
        measures: "Avoid close contact during outbreaks."
    },
    "genital_herpes": {
        medication: "Antiviral medications",
        measures: "Avoid close contact during outbreaks."
    },
    "hiv": {
        medication: "Antiretroviral therapy",
        measures: "Regular medical check-ups."
    },
    "syphilis": {
        medication: "Antibiotics (Penicillin)",
        measures: "Avoid sexual contact until treatment is complete."
    },
    "gonorrhea": {
        medication: "Antibiotics",
        measures: "Avoid sexual contact until treatment is complete."
    },
    "chlamydia": {
        medication: "Antibiotics",
        measures: "Avoid sexual contact until treatment is complete."
    },
    "trichomoniasis": {
        medication: "Antibiotics",
        measures: "Avoid sexual contact until treatment is complete."
    },
    "hpv": {
        medication: "HPV vaccine, Antivirals (if necessary)",
        measures: "Regular check-ups and consult a doctor."
    },
    "genital_warts": {
        medication: "Topical treatments, Surgery",
        measures: "Avoid sexual contact until treatment is complete."
    },
    "pubic_lice": {
        medication: "Topical insecticides",
        measures: "Wash clothes and bedding in hot water."
    },
    "scabies": {
        medication: "Topical scabicides",
        measures: "Wash clothes and bedding in hot water."
    },
    "ringworm": {
        medication: "Antifungal creams, Oral antifungals",
        measures: "Keep the affected area clean and dry."
    },
    "athletes_foot": {
        medication: "Antifungal creams",
        measures: "Keep feet clean and dry."
    },
    "eczema": {
        medication: "Topical steroids, Moisturizers",
        measures: "Avoid triggers and keep skin moisturized."
    },
    "psoriasis": {
        medication: "Topical treatments, Phototherapy",
        measures: "Avoid triggers and manage stress."
    },
    "acne": {
        medication: "Topical retinoids, Antibiotics",
        measures: "Keep skin clean and avoid heavy makeup."
    },
    "rosacea": {
        medication: "Topical treatments, Antibiotics",
        measures: "Avoid triggers and manage stress."
    },
    "warts": {
        medication: "Cryotherapy, Topical treatments",
        measures: "Avoid picking at warts."
    },
    "hives": {
        medication: "Antihistamines, Corticosteroids",
        measures: "Avoid known triggers and manage stress."
    },
    "cellulitis": {
        medication: "Antibiotics",
        measures: "Keep the affected area clean and monitor symptoms."
    },
    "shingles": {
        medication: "Antivirals, Pain relievers",
        measures: "Keep the rash clean and consult a doctor."
    },
    "vitiligo": {
        medication: "Topical treatments, Phototherapy",
        measures: "Consult a dermatologist."
    },
    "alopecia_areata": {
        medication: "Topical steroids, Immunotherapy",
        measures: "Consult a dermatologist."
    },
    "dandruff": {
        medication: "Anti-dandruff shampoos",
        measures: "Maintain scalp hygiene."
    },
    "sunburn": {
        medication: "Aloe vera, Pain relievers",
        measures: "Stay hydrated and avoid sun exposure."
    },
    "conjunctivitis": {
        medication: "Antihistamines, Antibiotic eye drops",
        measures: "Avoid touching the eyes."
    },
    "cataracts": {
        medication: "Surgery (in severe cases)",
        measures: "Regular eye check-ups."
    },
    "glaucoma": {
        medication: "Eye drops, Surgery (if necessary)",
        measures: "Regular eye check-ups."
    },
    "macular_degeneration": {
        medication: "Vitamins, Antioxidants",
        measures: "Regular eye check-ups."
    },
    "retinopathy": {
        medication: "Laser treatment, Medications",
        measures: "Regular eye check-ups."
    },
    "lazy_eye": {
        medication: "Eye patches, Vision therapy",
        measures: "Consult an eye specialist."
    },
    "strabismus": {
        medication: "Eye patches, Surgery (if necessary)",
        measures: "Consult an eye specialist."
    },
    "dry_eyes": {
        medication: "Artificial tears, Eye drops",
        measures: "Take breaks from screens and stay hydrated."
    },
    "earwax_blockage": {
        medication: "Ear drops, Irrigation",
        measures: "Avoid using cotton swabs."
    },
    "otitis_media": {
        medication: "Antibiotics (if bacterial)",
        measures: "Stay hydrated and consult a doctor."
    },
    "tinnitus": {
        medication: "Sound therapy, Hearing aids",
        measures: "Consult an audiologist."
    },
    "vertigo": {
        medication: "Medications for motion sickness",
        measures: "Avoid sudden movements."
    },
    "common_cold": {
        medication: "Pain relievers, Decongestants",
        measures: "Stay hydrated and rest."
    },
    "covid_19": {
        medication: "Antivirals, Supportive care",
        measures: "Stay hydrated and consult a doctor."
    },
    "hypoglycemia": {
        medication: "Glucose tablets, Snacks",
        measures: "Eat small, frequent meals."
    },
    "hyperglycemia": {
        medication: "Insulin, Oral hypoglycemics",
        measures: "Maintain a healthy diet and monitor blood sugar."
    },
    "gestational_diabetes": {
        medication: "Insulin (if necessary)",
        measures: "Maintain a healthy diet and exercise regularly."
    },
    "thyroid_disorders": {
        medication: "Levothyroxine (hypothyroidism), Antithyroid medications (hyperthyroidism)",
        measures: "Regular check-ups and consult a doctor."
    },
    "cushing_syndrome": {
        medication: "Corticosteroids, Surgery (if necessary)",
        measures: "Regular check-ups and consult a doctor."
    },
    "addisons_disease": {
        medication: "Corticosteroids, Mineralocorticoids",
        measures: "Regular check-ups and consult a doctor."
    },
    "pcos": {
        medication: "Hormonal contraceptives, Metformin",
        measures: "Maintain a healthy lifestyle and consult a doctor."
    },
    "menopause": {
        medication: "Hormone replacement therapy",
        measures: "Maintain a healthy lifestyle and consult a doctor."
    },
    "fertility_issues": {
        medication: "Fertility medications, IVF (if necessary)",
        measures: "Consult a fertility specialist."
    },
    "erectile_dysfunction": {
        medication: "PDE5 inhibitors, Hormone therapy",
        measures: "Consult a doctor and maintain a healthy lifestyle."
    },
    "pms": {
        medication: "Pain relievers, Hormonal treatments",
        measures: "Maintain a healthy lifestyle and manage stress."
    },
    "osteoarthritis": {
        medication: "Pain relievers, Topical treatments",
        measures: "Stay active and maintain a healthy weight."
    },
    "rheumatoid_arthritis": {
        medication: "Disease-modifying antirheumatic drugs (DMARDs)",
        measures: "Stay active and consult a doctor."
    },
    "gout": {
        medication: "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
        measures: "Avoid high-purine foods and stay hydrated."
    },
    "fibromyalgia": {
        medication: "Pain relievers, Antidepressants",
        measures: "Consult a doctor and manage stress."
    },
    "osteoporosis": {
        medication: "Calcium and vitamin D supplements",
        measures: "Stay active and maintain a healthy diet."
    },
    "muscle_strain": {
        medication: "Pain relievers, Rest",
        measures: "Avoid strenuous activity and rest."
    },
    "carpal_tunnel": {
        medication: "Wrist splints, Physical therapy",
        measures: "Avoid repetitive motions."
    },
    "chronic_back_pain": {
        medication: "Pain relievers, Physical therapy",
        measures: "Maintain a healthy posture and stay active."
    },
    "neck_pain": {
        medication: "Pain relievers, Physical therapy",
        measures: "Maintain a healthy posture and stay active."
    },
    "headaches": {
        medication: "Pain relievers, Preventive medications",
        measures: "Manage stress and maintain a healthy lifestyle."
    },
    "migraines": {
        medication: "Triptans, Preventive medications",
        measures: "Avoid triggers and manage stress."
    },
    "cervical_spine_disorder": {
        medication: "Pain relievers, Physical therapy",
        measures: "Maintain a healthy posture and stay active."
    },
    "lumbar_spine_disorder": {
        medication: "Pain relievers, Physical therapy",
        measures: "Maintain a healthy posture and stay active."
    },
    "sleep_apnea": {
        medication: "Continuous positive airway pressure (CPAP)",
        measures: "Maintain a healthy weight and avoid alcohol."
    },
    "insomnia": {
        medication: "Sleep aids, Cognitive behavioral therapy",
        measures: "Establish a regular sleep routine."
    },
    "restless_leg_syndrome": {
        medication: "Dopaminergic agents, Iron supplements",
        measures: "Maintain a regular sleep schedule."
    },
    "chronic_fatigue_syndrome": {
        medication: "Pain relievers, Antidepressants",
        measures: "Consult a doctor and manage stress."
    },
    "bipolar_disorder": {
        medication: "Mood stabilizers, Antidepressants",
        measures: "Regular therapy and medication adherence."
    },
    "depression": {
        medication: "Antidepressants, Therapy",
        measures: "Regular exercise and support from loved ones."
    },
    "anxiety": {
        medication: "Anxiolytics, Antidepressants",
        measures: "Therapy and stress management techniques."
    },
    "ptsd": {
        medication: "Antidepressants, Therapy",
        measures: "Support from loved ones and professional help."
    },
    "adhd": {
        medication: "Stimulants, Behavioral therapy",
        measures: "Support from loved ones and professional help."
    },
    "autism": {
        medication: "Behavioral therapy, Support services",
        measures: "Early intervention and support from loved ones."
    },
    "ocd": {
        medication: "SSRIs, Cognitive behavioral therapy",
        measures: "Regular therapy and support from loved ones."
    },
    "eating_disorders": {
        medication: "Nutritional counseling, Therapy",
        measures: "Support from loved ones and professional help."
    },
    "substance_abuse": {
        medication: "Rehabilitation programs, Therapy",
        measures: "Support from loved ones and professional help."
    },
    "chronic_pain": {
        medication: "Pain relievers, Therapy",
        measures: "Consult a doctor and manage stress."
    },
    "post_surgical_pain": {
        medication: "Pain relievers, Physical therapy",
        measures: "Follow post-operative care instructions."
    },
    "whiplash": {
        medication: "Pain relievers, Physical therapy",
        measures: "Avoid aggravating activities and rest."
    },
    "hypersensitivity": {
        medication: "Antihistamines, Corticosteroids",
        measures: "Avoid known allergens."
    },
    "hemorrhoids": {
        medication: "Topical treatments, Pain relievers",
        measures: "Maintain a high-fiber diet and stay hydrated."
    },
    "crohns_disease": {
        medication: "Anti-inflammatory drugs, Immune system suppressors",
        measures: "Consult a doctor and maintain a healthy diet."
    },
    "gastroesophageal_reflux_disease": {
        medication: "Antacids, Proton pump inhibitors",
        measures: "Avoid trigger foods and maintain a healthy diet."
    },
    "celiac_disease": {
        medication: "Gluten-free diet",
        measures: "Consult a dietitian."
    },
    "chronic_kidney_disease": {
        medication: "Medications for underlying causes, Dialysis (if necessary)",
        measures: "Regular check-ups and maintain a healthy diet."
    },
    "acute_kidney_injury": {
        medication: "Medications for underlying causes, Dialysis (if necessary)",
        measures: "Regular check-ups and maintain a healthy diet."
    },
    "liver_disease": {
        medication: "Medications for underlying causes, Avoid alcohol",
        measures: "Regular check-ups and maintain a healthy diet."
    },
    "hepatitis": {
        medication: "Antivirals, Supportive care",
        measures: "Avoid alcohol and consult a doctor."
    },
    "cirrhosis": {
        medication: "Medications for underlying causes, Supportive care",
        measures: "Avoid alcohol and maintain a healthy diet."
    },
    "cholecystitis": {
        medication: "Pain relievers, Surgery (if necessary)",
        measures: "Maintain a healthy diet and consult a doctor."
    },
    "tendonitis": {
        medication: "Pain relievers, Physical therapy",
        measures: "Rest and avoid aggravating activities."
    },
    "carpal_tunnel_syndrome": {
        medication: "Wrist splints, Physical therapy",
        measures: "Avoid repetitive motions."
    },
    "dehydration": {
        medication: "Oral rehydration solutions, IV fluids (if necessary)",
        measures: "Stay hydrated and avoid strenuous activity."
    },
    "allergies": {
        medication: "Antihistamines, Corticosteroids",
        measures: "Avoid known allergens and consult a doctor."
    },
    "chronic_bronchitis": {
        medication: "Bronchodilators, Corticosteroids",
        measures: "Avoid smoking and consult a doctor."
    },
    "chronic_obstructive_pulmonary_disease": {
        medication: "Bronchodilators, Corticosteroids",
        measures: "Avoid smoking and consult a doctor."
    },
    "coronary_artery_disease": {
        medication: "Statins, Antiplatelet agents",
        measures: "Maintain a healthy diet and exercise regularly."
    },
    "heart_failure": {
        medication: "Diuretics, ACE inhibitors",
        measures: "Maintain a healthy diet and exercise regularly."
    },
    "arrhythmias": {
        medication: "Antiarrhythmics, Blood thinners",
        measures: "Regular check-ups and consult a doctor."
    },
    "heart_attack": {
        medication: "Aspirin, Blood thinners",
        measures: "Call emergency services and consult a doctor."
    },
    "hypertension": {
        medication: "Antihypertensives, Lifestyle modifications",
        measures: "Maintain a healthy diet and exercise regularly."
    },
    "hypotension": {
        medication: "Fludrocortisone, Midodrine",
        measures: "Consult a doctor and maintain a healthy diet."
    },
    "high_cholesterol": {
        medication: "Statins, Lifestyle modifications",
        measures: "Maintain a healthy diet and exercise regularly."
    },
    "varicose_veins": {
        medication: "Compression stockings, Pain relievers",
        measures: "Stay active and avoid prolonged sitting or standing."
    },
    "deep_vein_thrombosis": {
        medication: "Anticoagulants, Compression stockings",
        measures: "Stay active and consult a doctor."
    },
    "pulmonary_embolism": {
        medication: "Anticoagulants, Supportive care",
        measures: "Call emergency services and consult a doctor."
    },
    "stroke": {
        medication: "Blood thinners, Rehabilitation therapy",
        measures: "Call emergency services and consult a doctor."
    },
    "transient_ischaemic_attack": {
        medication: "Antiplatelet agents, Lifestyle modifications",
        measures: "Consult a doctor and maintain a healthy diet."
    },
    "seizures": {
        medication: "Anticonvulsants, Lifestyle modifications",
        measures: "Consult a doctor and avoid triggers."
    },
    "epilepsy": {
        medication: "Anticonvulsants, Lifestyle modifications",
        measures: "Consult a doctor and avoid triggers."
    },
    "multiple_sclerosis": {
        medication: "Disease-modifying therapies, Symptomatic treatments",
        measures: "Consult a doctor and maintain a healthy lifestyle."
    },
    "parkinsons_disease": {
        medication: "Dopamine agonists, Anticholinergics",
        measures: "Consult a doctor and maintain a healthy lifestyle."
    },
    "alzheimer_disease": {
        medication: "Cholinesterase inhibitors, Supportive care",
        measures: "Consult a doctor and maintain a healthy lifestyle."
    },
    "schizophrenia": {
        medication: "Antipsychotics, Supportive care",
        measures: "Regular check-ups and consult a doctor."
    },
    "autism_spectrum_disorder": {
        medication: "Behavioral therapy, Supportive care",
        measures: "Early intervention and support from loved ones."
    },
};

function getRecommendation() {
    const problem = document.getElementById('problem-input').value.toLowerCase();
    const resultDiv = document.getElementById('recommendation-result');

    if (recommendations[problem]) {
        const recommendation = recommendations[problem];
        resultDiv.innerHTML = `<strong>Medications:</strong> ${recommendation.medication} <br> <strong>Measures:</strong> ${recommendation.measures}`;
    } else {
        resultDiv.innerHTML = "Sorry, I don't have recommendations for that problem. Please consult a doctor.";
    }
}
