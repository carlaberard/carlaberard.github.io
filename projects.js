window.PORTFOLIO_PROJECTS = [
  {
    "id": "age-estimation",
    "photo": "assets/project-photos/age-estimation.png",
    "title": "Age Estimation from Face & Voice",
    "short": "Comparing scratch CNNs with transfer learning for age regression from facial images and speech recordings.",
    "category": "AI & Machine Learning",
    "year": "2026",
    "repo": "deep-learning-age-estimation-face-voice",
    "tech": [
      "Python",
      "TensorFlow",
      "EfficientNetV2",
      "YAMNet"
    ],
    "theme": "ai",
    "shape": "neural",
    "featured": true,
    "metric": "6.63 yr",
    "metricLabel": "Face MAE · EfficientNetV2 (test)",
    "summary": "A controlled comparison of two deep learning strategies for predicting age from images and voice recordings. Face and audio branches were evaluated independently because the recordings were not paired to the same individuals.",
    "details": [
      "Built separate face and voice regression pipelines using UTKFace images and speech recordings.",
      "Compared residual CNNs and spectrogram CNNs trained from scratch against pretrained EfficientNetV2B0 and YAMNet/BiGRU approaches.",
      "Used train/validation/test splits, age-bin analysis, regression metrics and model checkpointing to study generalization."
    ],
    "outcome": "Best reported face test MAE: 6.63 years (EfficientNetV2B0). Best reported audio test MAE: 5.93 years (scratch CNN). Results come from different datasets and are not a paired multimodal benchmark.",
    "note": "Academic machine-learning experiment, not a clinical age-estimation system."
  },
  {
    "id": "voice-pathology",
    "photo": "assets/project-photos/voice-pathology.png",
    "title": "Voice Pathology Classification",
    "short": "Machine learning on electroglottography and neck-surface recordings to classify voice disorders.",
    "category": "AI & Machine Learning",
    "year": "2025",
    "repo": "voice-pathology-detection-machine-learning",
    "tech": [
      "Python",
      "Scikit-learn",
      "Librosa",
      "Feature Fusion"
    ],
    "theme": "signal",
    "shape": "voice",
    "featured": true,
    "metric": "50.4%",
    "metricLabel": "EGG + NSP fusion · reported accuracy",
    "summary": "An exploratory biomedical signal-processing pipeline for classifying healthy voices and three vocal disorders using EGG and NSP signals.",
    "details": [
      "Extracted acoustic and spectral features, including MFCC, RMS, ZCR and spectral descriptors.",
      "Compared logistic regression, decision trees, random forest and gradient boosting with patient-wise evaluation and feature selection.",
      "Investigated both feature-level and score-level fusion and prototyped a microphone-based classification workflow."
    ],
    "outcome": "Best reported four-class accuracy: 50.4% with Random Forest using combined EGG and NSP features. The result indicates potential complementarity between signal types, but is not clinically sufficient.",
    "note": "Exploratory academic results; not appropriate for medical diagnosis."
  },
  {
    "id": "hodgkin-huxley-neuron",
    "photo": "assets/project-photos/hodgkin-huxley-simulink.png",
    "title": "Hodgkin–Huxley Neuron Modelling",
    "short": "Simulating neuronal membrane dynamics and ionic currents in MATLAB/Simulink under different stimulation patterns.",
    "category": "Biomedical Signals & Modelling",
    "year": "2026",
    "repo": "",
    "tech": [
      "MATLAB",
      "Simulink",
      "Hodgkin–Huxley",
      "Neural Modelling"
    ],
    "theme": "ai",
    "shape": "neural",
    "featured": false,
    "metric": "7 signals",
    "metricLabel": "Membrane potential, three ionic currents and three gating variables",
    "summary": "A computational model of neuronal membrane excitability based on Hodgkin–Huxley equations. The Simulink implementation represents sodium, potassium and leak currents, gating variables and the feedback between ionic conductances and membrane voltage.",
    "details": [
      "Implemented the Hodgkin–Huxley equations in Simulink to model V(t), I_Na(t), I_K(t), I_L(t), m(t), h(t) and n(t).",
      "Compared simulated responses to step, random, pulse and sinusoidal current inputs, varying stimulus parameters.",
      "Explored how modified model parameters affect neuronal excitability and compared qualitative trends with published electrophysiology."
    ],
    "outcome": "Built a working Simulink model and explored how ionic currents, stimulus strength and frequency influence neuronal responses, including action-potential timing and recovery.",
    "note": "A single-region computational model; it does not simulate axonal propagation or clinically validate specific neurological or cardiac conditions."
  },
  {
    "id": "eeg-sleep-spectral",
    "photo": "assets/project-photos/eeg-spectral-topograms.png",
    "title": "EEG Sleep Spectral Analysis",
    "short": "Comparing seven power spectral density estimators and visualizing EEG frequency bands across sleep stages.",
    "category": "Biomedical Signals & Modelling",
    "year": "2026",
    "repo": "",
    "tech": [
      "MATLAB",
      "EEG",
      "Welch PSD",
      "Burg AR"
    ],
    "theme": "ai",
    "shape": "neural",
    "featured": false,
    "metric": "7 methods",
    "metricLabel": "Non-parametric and autoregressive PSD estimators",
    "summary": "An EEG signal-processing laboratory exercise comparing spectral estimation methods and scalp maps, with a focus on how spectral power estimates change across sleep stages and electrode locations.",
    "details": [
      "Processed EEG recordings and compared periodogram, Hamming periodogram, Welch and Burg autoregressive estimates with fixed, AIC and MDL-selected orders.",
      "Analyzed frequency bands (low delta, delta, theta, alpha, sigma and beta) and generated scalp topographies from the available EEG channels.",
      "Compared Welch and MDL-selected autoregressive estimates for AWAKE, S1, S2, SWS and REM, interpreting where the methods agreed or differed."
    ],
    "outcome": "The low-delta scalp maps and PSD plots showed estimator-dependent differences. In the supplied analysis, AR(2) missed spectral detail that other methods captured; Welch and AR(MDL) showed broad sleep-related trends with differences in contrast.",
    "note": "Educational analysis using a limited recording and selected epochs; spatial patterns and between-stage conclusions are qualitative rather than clinical."
  },
  {
    "id": "ecg-pvc-detection",
    "photo": "assets/project-photos/ecg-pvc-template.png",
    "title": "ECG PVC Detection & Analysis",
    "short": "Identifying premature ventricular contractions using ECG template averaging, normalized cross-correlation and peak detection.",
    "category": "Biomedical Signals & Modelling",
    "year": "2026",
    "repo": "",
    "tech": [
      "MATLAB",
      "ECG",
      "Cross-correlation",
      "Signal Processing"
    ],
    "theme": "ai",
    "shape": "neural",
    "featured": false,
    "metric": "5 PVCs",
    "metricLabel": "Initial beats aligned to form a representative template",
    "summary": "An ECG processing exercise focused on detecting premature ventricular contractions (PVCs). A representative ectopic beat was created from selected ECG segments and used as a template for signal matching.",
    "details": [
      "Inspected an ECG recording sampled at 200 Hz and selected five ectopic beats to build an averaged representative PVC waveform.",
      "Aligned beats around their R peaks and compared the template with the recording using normalized cross-correlation.",
      "Applied a correlation threshold and minimum peak separation to identify candidate PVCs, then plotted detections for visual inspection."
    ],
    "outcome": "The exercise produced a representative PVC template and marked candidate PVCs in the ECG; the report describes threshold-based separation of PVC-like beats from normal activity in the studied signal.",
    "note": "A course exercise on supplied signals, not a validated arrhythmia detector or diagnostic medical device."
  },
  {
    "id": "telecare",
    "photo": "assets/project-photos/telecare.png",
    "title": "IoT Telecare & Wearable Monitoring",
    "short": "Bangle.js sensors, BLE, Arduino, cloud dashboards and automatic SMS alerts in one telecare prototype.",
    "category": "Connected Devices",
    "year": "2025",
    "repo": "iot-telecare-health-monitoring",
    "tech": [
      "Arduino C++",
      "JavaScript",
      "BLE",
      "ThingSpeak"
    ],
    "theme": "iot",
    "shape": "telecare",
    "featured": true,
    "metric": "3",
    "metricLabel": "Wireless communication systems",
    "summary": "A connected-health prototype combining a Bangle.js smartwatch, Arduino UNO R4 WiFi and SIM900 module for remote monitoring and threshold-triggered notifications.",
    "details": [
      "Acquired heart rate, steps, GPS and compass measurements with JavaScript on the smartwatch.",
      "Sent measurements over Bluetooth Low Energy to Arduino, then over Wi-Fi to ThingSpeak for visualization.",
      "Implemented SMS notifications through a GSM module when programmed thresholds were exceeded."
    ],
    "outcome": "The coursework report documents successful data transmission, cloud visualization and SMS delivery during testing.",
    "note": "Prototype only. Thresholds are not validated clinical alarm criteria. Never commit credentials or personal phone numbers."
  },
  {
    "id": "pulse-oximeter",
    "photo": "assets/project-photos/pulse-oximeter.png",
    "title": "Pulse Oximeter · Embedded Electronics",
    "short": "A PIC microcontroller prototype integrating optical sensing, I²C and UART for heart-rate and SpO₂ readings.",
    "category": "Connected Devices",
    "year": "",
    "repo": "",
    "tech": [
      "C / MPLAB X",
      "PIC18F4321",
      "MAX30102",
      "I²C / UART"
    ],
    "theme": "iot",
    "shape": "telecare",
    "featured": false,
    "metric": "PIC18F4321",
    "metricLabel": "Microcontroller with MAX30102 optical sensor",
    "summary": "A hands-on digital electronics project developing an experimental pulse oximeter to explore physiological signal acquisition, embedded firmware and communication between a sensor, microcontroller and computer.",
    "details": [
      "Integrated the MAX30102 optical sensor with a PIC18F4321 microcontroller using I²C for red and infrared light measurements.",
      "Developed modular C firmware in MPLAB X, including Timer0 timing, button-controlled acquisition, LED status indications and serial communication.",
      "Used a CP2102 USB-to-UART interface to transmit readings to a computer for live display in a terminal, then tested individual interfaces before integration."
    ],
    "outcome": "The coursework prototype demonstrated the sensor-to-microcontroller-to-PC communication flow and displayed indicative heart-rate and oxygen-saturation readings. No comparison with a certified commercial pulse oximeter was performed.",
    "note": "Academic prototype only, with simplified calculations and no digital filtering. Not validated for clinical measurements."
  },
  {
    "id": "mri-restoration",
    "photo": "assets/project-photos/mri-restoration.png",
    "title": "Brain MRI Denoising",
    "short": "Noise reduction and anatomical detail preservation using five classical image-restoration techniques.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-image-restoration",
    "tech": [
      "Python",
      "OpenCV",
      "Scikit-image",
      "NIfTI"
    ],
    "theme": "imaging",
    "shape": "brain",
    "featured": false,
    "metric": "5",
    "metricLabel": "Denoising filters compared",
    "summary": "An analysis of how filtering methods affect noise, contrast and anatomical sharpness in a noisy 3D brain MRI volume.",
    "details": [
      "Loaded 3D NIfTI scans and visualized axial, sagittal and coronal planes.",
      "Implemented averaging, Gaussian, median, bilateral and non-local means filtering.",
      "Compared kernel sizes and parameters using side-by-side visualizations and difference images."
    ],
    "outcome": "For the supplied MRI sample, the report favored bilateral filtering for balancing noise reduction and visible edge preservation.",
    "note": "Qualitative comparison without a clean ground-truth MRI; no diagnostic performance claim."
  },
  {
    "id": "mri-segmentation",
    "photo": "assets/project-photos/mri-segmentation.png",
    "title": "2D vs 3D Brain MRI Segmentation",
    "short": "Sobel, Otsu and K-means applied slice-by-slice and across full MRI volumes.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-2d-3d-segmentation",
    "tech": [
      "Python",
      "Sobel",
      "Otsu",
      "K-means"
    ],
    "theme": "imaging",
    "shape": "segments",
    "featured": false,
    "metric": "6",
    "metricLabel": "2D and 3D processing variants",
    "summary": "A comparison of 2D and 3D approaches to intensity-based MRI segmentation and edge detection, storing all outputs in NIfTI format.",
    "details": [
      "Implemented Sobel magnitude computation in 2D and across all three spatial axes.",
      "Applied multilevel Otsu thresholding and K-means clustering to slices and full MRI volumes.",
      "Used 3D Slicer views to compare continuity and visual consistency across adjacent slices."
    ],
    "outcome": "The lab report describes more consistent across-slice appearance in 3D processing, with trade-offs in the flexibility of slice-specific methods.",
    "note": "Output classes are intensity groups, not verified anatomical tissue labels."
  },
  {
    "id": "mri-registration-2d",
    "photo": "assets/project-photos/mri-registration-2d.png",
    "title": "2D MRI Image Registration",
    "short": "Affine versus diffeomorphic registration for aligning individual brain MRI slices.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-affine-deformable-registration",
    "tech": [
      "Python",
      "DIPY",
      "Affine",
      "Deformable"
    ],
    "theme": "imaging",
    "shape": "registration",
    "featured": false,
    "metric": "2",
    "metricLabel": "Registration strategies",
    "summary": "An investigation into global and local image alignment, using affine transforms and symmetric diffeomorphic registration on 2D brain MRI slices.",
    "details": [
      "Prepared reference and moving MRI slices and generated affine alignment outputs.",
      "Compared global transform parameters with local deformable registration.",
      "Visualized registered images and deformation fields for selected subjects."
    ],
    "outcome": "Deformable registration provided finer local matching in the qualitative report, alongside the risk of non-physiological distortion.",
    "note": "Work is presented as a methodological learning exercise, not a verified clinical image registration system."
  },
  {
    "id": "mri-registration-3d",
    "photo": "assets/project-photos/mri-registration-3d.png",
    "title": "3D Brain MRI Registration",
    "short": "Volumetric alignment of segmented and non-segmented brain MRIs using affine and deformable methods.",
    "category": "Medical Imaging",
    "year": "2024",
    "repo": "brain-mri-3d-registration",
    "tech": [
      "Python",
      "DIPY",
      "3D MRI",
      "Dice Score"
    ],
    "theme": "imaging",
    "shape": "volume",
    "featured": false,
    "metric": "0.984",
    "metricLabel": "Reported segmented deformable Dice",
    "summary": "A volumetric registration study examining how affine and deformable transforms align brain MRI volumes, with comparisons on segmented and non-segmented inputs.",
    "details": [
      "Implemented 3D registration experiments and visualized anatomical planes and deformation fields.",
      "Evaluated affine and deformable outputs using reported Dice overlap and mean-squared error.",
      "Compared visual anatomical matching, especially around ventricular structures."
    ],
    "outcome": "The original report gave a Dice coefficient of approximately 0.984 for segmented deformable registration, while affine performed better on a separate error metric.",
    "note": "These are original reported metrics; corrected publishing code has not been fully rerun."
  },
  {
    "id": "xray-classical",
    "photo": "assets/project-photos/xray-classical.png",
    "title": "Chest X-ray Classification · Classical ML",
    "short": "HOG features with SVM, KNN and Random Forest for three-class chest radiograph classification.",
    "category": "AI & Machine Learning",
    "year": "2024",
    "repo": "chest-xray-classification-machine-learning",
    "tech": [
      "Python",
      "HOG",
      "SVM",
      "KNN"
    ],
    "theme": "ai",
    "shape": "xray",
    "featured": false,
    "metric": "80.3%",
    "metricLabel": "Reported test accuracy · SVM/KNN",
    "summary": "A medical-imaging machine-learning exercise comparing conventional classifiers on feature vectors extracted from chest radiographs.",
    "details": [
      "Preprocessed a dataset of COVID-19, Normal and Viral Pneumonia X-rays.",
      "Extracted Histogram of Oriented Gradients (HOG) descriptors.",
      "Evaluated SVM, KNN and Random Forest models with accuracy and confusion matrices."
    ],
    "outcome": "SVM and KNN each achieved a reported 80.30% accuracy on a 66-image test set.",
    "note": "Small academic dataset. Performance does not support clinical diagnostic use."
  },
  {
    "id": "xray-deep",
    "photo": "assets/project-photos/xray-deep.png",
    "title": "Chest X-ray Classification · Deep Learning",
    "short": "Scratch CNNs, data augmentation and ResNet-18 transfer learning in PyTorch.",
    "category": "AI & Machine Learning",
    "year": "2024",
    "repo": "chest-xray-cnn-transfer-learning",
    "tech": [
      "PyTorch",
      "ResNet-18",
      "CNN",
      "Transfer Learning"
    ],
    "theme": "ai",
    "shape": "cnn",
    "featured": false,
    "metric": "98.5%",
    "metricLabel": "Reported ResNet-18 accuracy · caveat",
    "summary": "A comparison of convolutional neural networks for three-category chest X-ray classification, advancing the earlier HOG-based project.",
    "details": [
      "Trained an initial CNN, an augmented CNN and a ResNet-18 transfer-learning model.",
      "Compared model predictions and confusion matrices on the provided train/test split.",
      "Audited data provenance and identified exact train/test duplicate images."
    ],
    "outcome": "ResNet-18 achieved a reported 98.48% accuracy, but six exact image duplicates were found between the original training and test folders; an independent holdout reevaluation is required.",
    "note": "Reported accuracy may be inflated by data leakage. The result is not clinical validation."
  },
  {
    "id": "robot-pick",
    "photo": "",
    "title": "UR3e Seven-Segment Robotic Assembly",
    "short": "URScript-controlled gripper movements to arrange blocks into user-selected digits.",
    "category": "Robotics & Control",
    "year": "2025",
    "repo": "ur3e-robotic-pick-and-place",
    "tech": [
      "URScript",
      "UR3e",
      "RG2 Gripper",
      "Motion Control"
    ],
    "theme": "robotics",
    "shape": "robot",
    "featured": false,
    "metric": "0–9",
    "metricLabel": "Selectable digit assembly",
    "summary": "An interactive pick-and-place task in which the UR3e arranges rectangular wooden blocks into seven-segment digits based on user input.",
    "details": [
      "Defined placement poses for the seven possible segment locations.",
      "Mapped digits to lists of target segments, validated user input, and generated conditional pick-and-place motions.",
      "Used joint and Cartesian motion commands and RG2 gripper calls to manipulate blocks."
    ],
    "outcome": "Robot-side URScript implements all ten digit layouts. This publication copy was not revalidated on physical hardware.",
    "note": "Hard-coded robot poses require calibration, supervision and safety checks before any real execution."
  },
  {
    "id": "robot-force",
    "photo": "",
    "title": "UR3e Force-Feedback Manipulation",
    "short": "Contact-aware block detection and tower placement using wrist force sensing and URScript threads.",
    "category": "Robotics & Control",
    "year": "2025",
    "repo": "ur3e-force-feedback-manipulation",
    "tech": [
      "URScript",
      "Force/Torque",
      "Threads",
      "Contact Detection"
    ],
    "theme": "robotics",
    "shape": "force",
    "featured": true,
    "metric": "5 N",
    "metricLabel": "Programmed vertical force threshold",
    "summary": "A force-based robotic manipulation exercise that combines concurrent motion and sensing to locate blocks and place them on an unknown-height surface.",
    "details": [
      "Used the UR3e internal force/torque sensor for contact detection.",
      "Monitored force while a separate motion thread executes controlled descent.",
      "Programmed block pickup, tower placement, fallback messages and return-to-home behavior."
    ],
    "outcome": "The original code implements force-threshold contact logic for robotic manipulation. It was not independently tested in simulation or on hardware for this website.",
    "note": "A URScript source example, not a safety-certified controller; do not run unchanged on a real robot."
  },
  {
    "id": "robot-collab",
    "photo": "assets/project-photos/robot-collab.png",
    "title": "UR3 + UR3e Collaborative Robotics",
    "short": "Two coordinated robotic arms exchanging TCP/IP messages to synchronize a shared task.",
    "category": "Robotics & Control",
    "year": "2025",
    "repo": "ur3-ur3e-collaborative-robotics",
    "tech": [
      "URScript",
      "TCP/IP",
      "Sockets",
      "Multi-Robot Systems"
    ],
    "theme": "robotics",
    "shape": "collab",
    "featured": true,
    "metric": "2",
    "metricLabel": "Coordinated robot programs",
    "summary": "A multi-robot programming exercise coordinating a UR3 and UR3e using socket messages relayed by a PC-based intermediary.",
    "details": [
      "Programmed the UR3e to grasp and transport a block using RG2 gripper control.",
      "Programmed the UR3 to perform a tool-rotation action after receiving placement confirmation.",
      "Synchronized both robot scripts with TCP socket events, timeouts and ordered messages."
    ],
    "outcome": "The report documents the task coordination and workflow. The supplied materials include the two robot-side scripts but not the external PC relay source.",
    "note": "The UR3 operation simulates secondary manipulation; both robots act as socket clients to a PC message relay."
  }
];
