import styles from './styles.module.css'
import useAutocomplete from '@/app/hooks/useAutocomplete'

const AutocompleteInput = () => {
  const { value, setValue, status, data, handleSelect, selected, clearCoordinates } = useAutocomplete()

  const handleInputChange = (e) => {
    const inputValue = e.target.value

    if (inputValue === '') {
      clearCoordinates()
    }

    setValue(inputValue)
  }

  return (
    <div className={styles.autocompleteContainer}>
      <input
        value={value}
        onChange={handleInputChange}
        className={styles.autocompleteInput}
        placeholder='Buscar dirección'
      />
      {status === 'OK' && (
        <ul className={styles.autocompleteSuggestions}>
          {data.map(({ description, placeId }) => (
            <li key={placeId} onClick={() => handleSelect(description)} className={styles.suggestionItem}>
              {description}
            </li>
          ))}
        </ul>
      )}
      {selected && (
        <div>
          <p>Coordenadas:</p>
          <p>Latitude: {selected.lat}</p>
          <p>Longitude: {selected.lng}</p>
        </div>
      )}
    </div>
  )
}

export default AutocompleteInput
