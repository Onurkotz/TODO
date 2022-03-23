import React from 'react'

function input() {
  return (
    <div>
        <form>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus />
		</form>
    </div>
  )
}

export default input