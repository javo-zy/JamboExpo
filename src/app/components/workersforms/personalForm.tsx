import React from 'react';
import FormInput from './formImput';
import FormTextarea from './formTextArea';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-6 mb-3 col-span-full">{title}</h3>
);

const PersonalForm: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Personal</h1>
      <p className="text-sm text-gray-500 mb-6">Contact/worker's information</p>

      <div className="space-y-3">
        {/* Personal settings */}
        <div className="border-b border-gray-300 pb-6">
          <SectionTitle title="Personal settings" />
          <div className="grid grid-cols-1 gap-x-4 gap-y-3">
            <FormInput label="Full name" id="fullName" type="text" />
            <FormInput label="Age" id="age" type="number" />
            <FormInput label="Domain" id="domain" type="text" />
          </div>
        </div>

        {/* Location */}
        <div className="border-b border-gray-300 pb-6">
          <SectionTitle title="Location" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
            <FormInput label="City/Municipality" id="city" type="text" className="md:col-span-2" />
            <FormInput label="Availability to travel" id="availabilityToTravel1" type="text" placeholder="e.g. Yes/No, Specific regions" />
             {/* The image shows two small boxes, this can be expanded to checkboxes or more specific inputs */}
            <FormInput label="" id="availabilityToTravel2" type="text" aria-label="Additional availability details"/>
          </div>
        </div>
        
        {/* Professional details */}
        <div>
          <SectionTitle title="Professional details" />
          <div className="grid grid-cols-1 gap-x-4 gap-y-3">
            <FormInput label="Main office" id="mainOffice" type="text" />
            <FormInput label="Years of experience" id="yearsOfExperience" type="number" />
            <FormTextarea label="Services offered" id="servicesOffered" rows={3} />
            
            <div className="grid grid-cols-2 gap-x-4">
              <FormInput label="Working days" id="workingDays1" type="text" placeholder="e.g. Mon-Fri"/>
              <FormInput label=" " id="workingDays2" type="text" aria-label="Additional working days info" placeholder="e.g. Sat (Half)"/>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <FormInput label="Working hours" id="workingHours1" type="text" placeholder="e.g. 9 AM - 5 PM"/>
              <FormInput label=" " id="workingHours2" type="text" aria-label="Additional working hours info" placeholder="e.g. Flexible"/>
            </div>
            
            <FormInput label="Approximate price" id="approximatePrice" type="text" />
            
            <div className="grid grid-cols-2 gap-x-4">
              <FormInput label="Phone number" id="phoneCountryCode" type="text" placeholder="Code"/>
              <FormInput label=" " id="phoneNumber" type="text" aria-label="Phone number" placeholder="Number"/>
            </div>
            
            <FormTextarea label="Previous works" id="previousWorks" rows={4} />
            <FormTextarea label="Certificates (if available)" id="certificates" rows={4} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalForm;