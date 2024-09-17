import React, { ForwardedRef } from 'react'
import {PatchEvent, set, unset} from 'sanity'

const CurrentTrackInput = React.forwardRef((props: any, ref: ForwardedRef<HTMLSelectElement>) => {
  const {onChange, value, document} = props

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const inputValue = event.target.value
      onChange(PatchEvent.from(inputValue ? set(Number(inputValue)) : unset()))
    },
    [onChange]
  )

  const songs = document.songs || []

  return (
    <select
      ref={ref}
      value={value ?? ''}
      onChange={handleChange}
    >
      <option value="">Random Selection</option>
      {songs.map((song: any, index: number) => (
        <option key={index} value={index}>
          {song.trackName}
        </option>
      ))}
    </select>
  )
})

CurrentTrackInput.displayName = 'CurrentTrackInput'

export default CurrentTrackInput