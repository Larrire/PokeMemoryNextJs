export const PokemonCard = (props: PokemonCardProps) => {
  const { onclick } = props

  return (
    <div onClick={onclick}>
      <h1>PokemonCard</h1>
    </div>
  )
}

interface PokemonCardProps {
  onclick: () => void
}
