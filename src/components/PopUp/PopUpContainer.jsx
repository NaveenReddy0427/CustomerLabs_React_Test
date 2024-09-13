import { useState } from "react";
import PopUpUI from "./PopUpUI";
import './PopUpUI.css';

const schemaOptions = [
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
];

const PopUpContainer = ({ onClose }) => {
    
    const [segmentName, setSegmentName] = useState('');
    const [schemas, setSchemas] = useState([]);
    const [dropdownValue, setDropdownValue] = useState('');

    const handleSchemaChange = (index, value) => {
        const newSchemas = [...schemas];
        newSchemas[index] = value;
        setSchemas(newSchemas);
    };

    const addNewSchema = () => {
        if (dropdownValue === '') return;
        setSchemas([...schemas, dropdownValue]);
        setDropdownValue(''); // Reset the main dropdown
    };

    const handleSave = async () => {
        const schemaData = schemas.map(schemaValue => {
            const selectedOption = schemaOptions.find(option => option.value === schemaValue);
            return { [schemaValue]: selectedOption ? selectedOption.label : '' };
        });

        const dataToSend = {
            segment_name: segmentName,
            schema: schemaData,
        };

        try {
            const response = await fetch('https://thingproxy.freeboard.io/fetch/https://webhook.site/6cf2e95e-90e6-434f-bb23-308d893fb5a5', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'https://customer-labs-react-test-vnxobthlx-naveens-projects-8a722c31.vercel.app'
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const resultText = await response.text();
            console.log('Data sent successfully:', resultText);
            alert('Data sent successfully!');
            onClose();
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending data.');
        }
    };

    const getAvailableOptions = () => {
        return schemaOptions.filter(option => !schemas.includes(option.value));
    };

    return (
        <PopUpUI
            segmentName={segmentName}
            setSegmentName={setSegmentName}
            schemas={schemas}
            handleSchemaChange={handleSchemaChange}
            schemaOptions={schemaOptions}
            getAvailableOptions={getAvailableOptions}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue}
            addNewSchema={addNewSchema}
            handleSave={handleSave}
            onClose={onClose}
        />
    );
};

export default PopUpContainer;
