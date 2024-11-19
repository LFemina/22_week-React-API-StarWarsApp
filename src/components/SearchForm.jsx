import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [entity, setEntity] = useState('films');
    const [idNum, setIdNum] = useState(1);

    const handleSearch = () => {
        onSearch(entity, idNum);
    };

    return (
        <div id="request">
            <label id="label" htmlFor="entity" className="reqItems">Кого или что будем искать?</label>
            <select
                name="select"
                id="entity"
                className="reqItems"
                value={entity}
                onSearch={(e) => setEntity(e.target.value)}
            >
                <option value="films">Фильм</option>
                <option value="people">Люди</option>
                <option value="planets">Планеты</option>
                <option value="starships">Космические корали</option>
            </select>
            <input
                type="number"
                name="idNum"
                id="idNum"
                min="1"
                max="10"
                className="reqItems"
                value={idNum}
                onChange={(e) => setIdNum(e.target.value)}
            />
            <button id="fetchBtn" className="reqItems" onClick={handleSearch}>Вперёд!</button>
        </div>
    );
};

export default SearchForm;