const builders = [
  ["Abdominals", "Abs-Lower", "Full Reverse Crunch", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Lower", "Incline Hip Thrust", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Lower", "Incline Reverse Crunch", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Lower", "Lying Hip Thrust", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Lower", "Reverse Crunch", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Lower", "Reverse Medicine Ball Crunch", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Alternating Heel Touch", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Bent-Knee Medicine Ball Hip Rot", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Cable Chop", "Advanced", "Core", "Push", "Cable", ], 
["Abdominals", "Abs-Obliques", "Cross Crunch", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Cross Crunch with Medicine Ball", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Decline Cross Sit-Up", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Decline Sit-Up with Twist", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Reverse Cable Chop", "Advanced", "Core", "Push", "Cable", ], 
["Abdominals", "Abs-Obliques", "Seated Medicine Ball Twist", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Obliques", "Trunk Rotator", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Front Plank -from knees", "Beginner", "Core", "Static", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Front Plank -from toes", "Intermediate", "Core", "Static", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Front Plank -tripod", "Advanced", "Core", "Static", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Side-Plank -from knees", "Intermediate", "Core", "Static", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Side-Plank -hip lift", "Beginner", "Core", "Static", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Side-Plank -from toes", "Advanced", "Core", "Static", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Ab Cycle", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Kneeling Ab Rollout", "Intermediate", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Medicine Ball V-Up", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Total", "V-Up", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Total", "Weighted V-Up", "Intermediate", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Bent Knee Sit-Up", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Bent-Knee Crunch", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Crunch", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Crunch", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Decline Crunch", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Decline Sit-Up", "Advanced", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Heel Touch", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Sit-Up", "Beginner", "Core", "Push", "Free-Weight", ], 
["Abdominals", "Abs-Upper", "Weighted Crunch", "Intermediate", "Core", "Push", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Assisted Pull-Up", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Close-Grip Lat Pulldown", "Beginner", "Upper", "Pull", "Machine", ], 
["Lats", "Latissimus Dorsi", "Inverted Pull-Up", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Lat Pulldown", "Beginner", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Pull-Up", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Reverse-Grip Lat Pullown", "Intermediate", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Reverse-Grip Pull-Up", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "V-Bar Pull-Up", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Wide-Grip Lat Pulldown", "Beginner", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Bent-Over Alternating Dumbbell Row", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Bent-Over Barbell Row", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Bent-Over Dumbbell Row", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Bent-Over Hammer Dumbbell Row", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Bent-Over Long Barbell Row", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Bent-Over Reverse-Grip Barbell Row", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Bent-Over Single-Arm Long Barbell Row", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Machine Row", "Beginner", "Upper", "Pull", "Machine", ], 
["Lats", "Latissimus Dorsi", "One Arm Dumbbell Row", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Reverse Incline Dumbbell Row", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Rope Cable Row", "Intermediate", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Seated Cable Row", "Beginner", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Seated Row", "Beginner", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Single-Arm Cable Row", "Intermediate", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Single-Arm Dumbbell Row", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Lats", "Latissimus Dorsi", "Single-Arm Lat Pulldown", "Intermediate", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Standing Cable Row", "Beginner", "Upper", "Pull", "Cable", ], 
["Lats", "Latissimus Dorsi", "Standing Single-Arm Cable Row", "Intermediate", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Alternating Dumbbell Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Alternating Hammer Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Barbell Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Bicep Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Bottom/Top/Full Curls", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Cable Curl", "Intermediate", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Concentration Dumbbell Curl", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Cross Body Hammer Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Dumbbell Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "EZ-Bar Curl", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Hammer Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Incline Alternating Dumbbell Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Incline Alternating Hammer Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Incline Dumbbell Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Incline Hammer Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Kneeling Cable Curl", "Beginner", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Lying Cable Curl", "Intermediate", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Lying Double Biceps Cable Curl", "Intermediate", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Lying High Cable Curl", "Advanced", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Machine Curl", "Beginner", "Upper", "Pull", "M", ], 
["Biceps", "Biceps", "Overhead Double Biceps Cable Curl", "Advanced", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Overhead Rope Cable Curl", "Advanced", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Preacher Barbell Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Preacher Cable Curl", "Advanced", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Preacher Dumbbell Curl", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Preacher EZ-Bar Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Preacher Hammer Dumbbell Curl", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Preacher Single-Arm Dumbbell Curl", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Reverse Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Rope Cable Curl", "Intermediate", "Upper", "Pull", "Cable", ], 
["Biceps", "Biceps", "Seated Alternating Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Seated Alternating Hammer Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Seated Dumbbell Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Seated Hammer Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Single-Arm Barbell Curl", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Single-Arm Cable Curl", "Intermediate", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Single-Arm Dumbbell Curl w/ Incline Bench", "Beginner", "Upper", "Pull", "Free-Weight", ], 
["Biceps", "Biceps", "Spider Curl", "Advanced", "Upper", "Pull", "Free-Weight", ], 
["Calves", "Calves-Gastrocnemius", "Barbell Calf Raise", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Calves", "Calves-Gastrocnemius", "Calf Press", "Beginner", "Lower", "Push", "M", ], 
["Calves", "Calves-Gastrocnemius", "Calf Raise - Seated", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Calves", "Calves-Gastrocnemius", "Calf Raise - Standing", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Calves", "Calves-Gastrocnemius", "Dumbbell Calf Raise", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Calves", "Calves-Gastrocnemius", "Single-Leg Calf Press", "Advanced", "Lower", "Push", "M", ], 
["Calves", "Calves-Gastrocnemius", "Single-Leg Dumbbell Calf Raise", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Calves", "Calves-Gastrocnemius", "Smith Machine Calf Raise", "Intermediate", "Lower", "Push", "M", ], 
["Calves", "Calves-Soleus", "Seated Calf Raise", "Beginner", "Lower", "Push", "M", ], 
["Calves", "Calves-Soleus", "Seated Single-Leg Calf Raise", "Intermediate", "Lower", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Alternating Dumbbell Bench Press", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Barbell Bench Press", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Chest Press", "Beginner", "Upper", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Decline Dumbbell Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Decline Smith Machine Bench Press", "Advanced", "Upper", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Dumbbell Bench Press", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Dumbbell Push-Up", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Elevated Push-Up", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Flat Bench Press", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Alternating Dumbbell Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Barbell Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Dumbbell Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Hammer Dumbbell Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Single-Arm Dumbbell Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Smith Machine Bench Press", "Advanced", "Upper", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Incline Twisting Dumbbell Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Kneeling Push-Up", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Machine Bench Press", "Beginner", "Upper", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Machine Vertical Bench Press", "Beginner", "Upper", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Medicine Ball Crossover Push-Up", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Push-Up", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Single-Arm Dumbbell Bench Press", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Smith Machine Bench Press", "Intermediate", "Upper", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Twisting Dumbbell Bench Press", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Wide-Grip Push-Up", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Cable Crossover", "Advanced", "Upper", "Push", "Cable", ], 
["Chest", "Chest-Pectoralis", "Cable Fly", "Advanced", "Upper", "Push", "Cable", ], 
["Chest", "Chest-Pectoralis", "Decline Dumbbell Fly", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Dumbbell Fly", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "High Cable Crossover", "Advanced", "Upper", "Push", "Cable", ], 
["Chest", "Chest-Pectoralis", "Incline Cable Fly", "Advanced", "Upper", "Push", "Cable", ], 
["Chest", "Chest-Pectoralis", "Incline Dumbbell Fly", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Incline Twisting Dumbbell Fly", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Chest", "Chest-Pectoralis", "Low Cable Crossover", "Intermediate", "Upper", "Push", "Cable", ], 
["Chest", "Chest-Pectoralis", "Pec Deck", "Beginner", "Upper", "Push", "M", ], 
["Chest", "Chest-Pectoralis", "Pec Deck Fly", "Beginner", "Upper", "Push", "M", ], 
["Legs", "Legs-Hamstrings", "Bent-Knee Single-Leg Hip Lift", "Advanced", "Lower", "Pull", "Free-Weight", ], 
["Legs", "Legs-Hamstrings", "Elevated Hip Lift", "Intermediate", "Lower", "Pull", "Free-Weight", ], 
["Legs", "Legs-Hamstrings", "Elevated Single-Leg Hip Lift", "Advanced", "Lower", "Pull", "Free-Weight", ], 
["Legs", "Legs-Hamstrings", "Hip Lift", "Beginner", "Lower", "Pull", "Free-Weight", ], 
["Legs", "Legs-Hamstrings", "Single-Leg Hip Lift", "Intermediate", "Lower", "Pull", "Free-Weight", ], 
["Legs", "Legs-Hamstrings", "Deadlift", "Advanced", "Lower", "Pull", "Free-Weight", ], 
["Legs", "Legs-Hamstrings", "Leg Curl", "Beginner", "Lower", "Pull", "M", ], 
["Legs", "Legs-Hamstrings", "Lying Alternating Leg Curl", "Intermediate", "Lower", "Pull", "M", ], 
["Legs", "Legs-Hamstrings", "Lying Leg Curl", "Beginner", "Lower", "Pull", "M", ], 
["Legs", "Legs-Hamstrings", "Lying Single-Leg Curl", "Intermediate", "Lower", "Pull", "M", ], 
["Legs", "Legs-Hamstrings", "Seated Leg Curl", "Beginner", "Lower", "Pull", "M", ], 
["Legs", "Legs-Quadriceps", "Barbell Diagonal Lunge", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Hack Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Lunge", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Reverse Lunge", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Side Lunge", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Split Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Squat", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Step-Up", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Barbell Walking Lunge", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Diagonal Lunge", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Diagonal Lunge", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Lunge", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Reverse Lunge", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Side Lunge", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Split Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Squat", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Step-Up", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Dumbbell Walking Lunge", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Forward Lunge", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Lateral Barbell Squat", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Lateral Barbell Step-Up", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Lateral Squat", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Lateral Step-Up", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Leg Press", "Beginner", "Lower", "Push", "M", ], 
["Legs", "Legs-Quadriceps", "Lunge", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Lying Machine Squat", "Beginner", "Lower", "Push", "M", ], 
["Legs", "Legs-Quadriceps", "Machine Hack Squat", "Beginner", "Lower", "Push", "M", ], 
["Legs", "Legs-Quadriceps", "Reverse Lunge", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Single-Arm Barbell Side Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Single-Arm Dumbbell Side Squat", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Single-Leg Barbell Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Single-Leg Box Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Single-Leg Dumbbell Box Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Single-Leg Dumbbell Squat", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Single-Leg Squat", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Smith Machine Squat", "Intermediate", "Lower", "Push", "M", ], 
["Legs", "Legs-Quadriceps", "Split Squat", "Advanced", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Step-Up", "Beginner", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Walking Lunge", "Intermediate", "Lower", "Push", "Free-Weight", ], 
["Legs", "Legs-Quadriceps", "Alternating Leg Ext", "Intermediate", "Lower", "Push", "M", ], 
["Legs", "Legs-Quadriceps", "Leg Ext", "Beginner", "Lower", "Push", "M", ], 
["Legs", "Legs-Quadriceps", "Single-Leg Ext", "Intermediate", "Lower", "Push", "M", ], 
["Back", "LowerBack-ErectorSpinae", "Alternating Superman", "Beginner", "Core", "Pull", "Free-Weight", ], 
["Back", "LowerBack-ErectorSpinae", "Back Raise", "Beginner", "Core", "Pull", "Free-Weight", ], 
["Back", "LowerBack-ErectorSpinae", "Quadruped Alternating Superman", "Beginner", "Core", "Pull", "Free-Weight", ], 
["Back", "LowerBack-ErectorSpinae", "Superman", "Beginner", "Core", "Pull", "Free-Weight", ], 
["Back", "LowerBack-ErectorSpinae", "Superman Hold", "Beginner", "Core", "Pull", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Arnold Dumbbell Press", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Barbell Shoulder Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Dumbbell Alternating Shoulder Press", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Dumbbell Front Raise", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Dumbbell Shoulder Press", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Dumbbell Twisting Shoulder Press", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Machine Shoulder Press", "Beginner", "Upper", "Push", "M", ], 
["Shoulders", "Shoulders-Delts/Traps", "Seated Dumbbell Rear Delt Elbow Raise", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Single-Arm Dumbbell Shoulder Press", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Smith Machine Shoulder Press", "Advanced", "Upper", "Push", "M", ], 
["Shoulders", "Shoulders-Delts/Traps", "Barbell Front Raise", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Bent-Over Cable Rear Delt Raise", "Advanced", "Upper", "Push", "Cable", ], 
["Shoulders", "Shoulders-Delts/Traps", "Bent-Over Dumbbell Rear Delt Raise", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Cable Front Raise", "Intermediate", "Upper", "Push", "Cable", ], 
["Shoulders", "Shoulders-Delts/Traps", "Cable Lateral Raise", "Intermediate", "Upper", "Push", "Cable", ], 
["Shoulders", "Shoulders-Delts/Traps", "Dumbbell Lateral Raise", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Front Plate Raise", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Kneeling Single-Arm Cable Rear Delt Raise", "Advanced", "Upper", "Push", "Cable", ], 
["Shoulders", "Shoulders-Delts/Traps", "Lying Dumbbell External Rot", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Lying Dumbbell Rear Delt Raise", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Lying Single-Arm Dumbbell Rear Delt Raise", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Pec Deck Real Delt Exts", "Intermediate", "Upper", "Push", "M", ], 
["Shoulders", "Shoulders-Delts/Traps", "Reverse Incline Dumbbell Rear Delt Raise", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Seated Dumbbell Rear Delt Raise", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Shoulders", "Shoulders-Delts/Traps", "Single-Arm Cable Lateral Raise", "Intermediate", "Upper", "Push", "Cable", ], 
["Shoulders", "Shoulders-RotatorCuff", "Cable External Rot", "Beginner", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Close-Grip Bench Press", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Forward Lean Dips", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Assisted Dips", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Bench Dips", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Diamond Push-Up", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Dips", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Machine Dips", "Beginner", "Upper", "Push", "M", ], 
["Triceps", "Triceps", "Decline Dumbbell Triceps Ext", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Decline EZ-Bar Tricep Ext", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Decline Single Dumbbell Triceps Ext", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Decline Single-Arm Dumbbell Triceps Ext", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Dumbbell Kickback", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Incline EZ-Bar Tricep Ext", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Kneeling Cable Triceps Ext", "Beginner", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Leaning Overhead Tricep Ext", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Low Cable Triceps Ext", "Intermediate", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Lying Cable Triceps Ext", "Intermediate", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Lying EZ-Bar Triceps Ext", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Lying Overhead EZ-Bar Tricep Ext", "Intermediate", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Lying Reverse EZ-Bar Triceps Ext", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Lying Single Dumbbell Triceps Ext", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Lying Single-Arm Dumbbell Triceps Ext", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Lying Tricep Exts", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Overhead Dumbbell Triceps Ext", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Overhead EZ-Bar Triceps Ext", "Advanced", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Overhead Rope Cable Tricep Ext", "Intermediate", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Overhead Single Dumbbell Tricep Ext", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Overhead Single-Arm Cable Tricep Ext", "Intermediate", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Overhead Single-Arm Dumbbell Tricep Ext", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Reverse Tricep Pushdown", "Advanced", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Rope Triceps Pushdown", "Intermediate", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Single-Arm Towel Triceps Pushdown", "Beginner", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Single-Arm Triceps Pushdown", "Intermediate", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Towel Triceps Pushdown", "Beginner", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Tricep Exts", "Beginner", "Upper", "Push", "Free-Weight", ], 
["Triceps", "Triceps", "Tricep Pushdown", "Beginner", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "Tricep Pushdown", "Beginner", "Upper", "Push", "Cable", ], 
["Triceps", "Triceps", "V-Bar Tricep Pushdown", "Beginner", "Upper", "Push", "Cable", ], 

]


module.exports = builders;
