import './index.css'

export function App(): string {
    return 'app started'
}

if (typeof window == 'object') {
    console.log(App())
}
