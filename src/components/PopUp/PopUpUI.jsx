const PopUpUI = ({
    segmentName,
    setSegmentName,
    schemas,
    handleSchemaChange,
    schemaOptions,
    getAvailableOptions,
    dropdownValue,
    setDropdownValue,
    addNewSchema,
    handleSave,
    onClose
}) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Enter the Name of the Segment</h2>
                <input
                    type="text"
                    placeholder="Name of the segment"
                    value={segmentName}
                    onChange={(e) => setSegmentName(e.target.value)}
                />

                <div className="schema-selection">
                    {schemas.map((schema, index) => (
                        <select
                            key={index}
                            value={schema}
                            onChange={(e) => handleSchemaChange(index, e.target.value)}
                        >
                            <option value="" disabled>Select schema</option>
                            {schemaOptions.map(option => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                    disabled={schemas.includes(option.value)}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ))}

                    <div className="add-schema">
                        <select
                            value={dropdownValue}
                            onChange={(e) => setDropdownValue(e.target.value)}
                            disabled={getAvailableOptions().length === 0}
                        >
                            <option value="" disabled>Add schema to segment</option>
                            {getAvailableOptions().map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <a href="#" onClick={addNewSchema} className="add-schema-link">+ Add new schema</a>
                    </div>
                </div>

                <div className="actions">
                    <button onClick={handleSave} className="save-btn">Save the Segment</button>
                    <button onClick={onClose} className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default PopUpUI;
