export function ProgressBar({ progress, children }) {
    
    const getByPercent = () => `conic-gradient(rgb(228, 193, 246) ${progress}%, gray 0)`;
    
    return (
        <div className="progress-bar" style={{backgroundImage: getByPercent()}}>
            <div className="content">
                {children}
            </div>
        </div>
    )
}