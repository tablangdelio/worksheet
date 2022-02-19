

const TabContent = ({id, activeTab, children }) => {
    return(
        
        activeTab === id 
        ? 
            <div>
                { children }
            </div>
        :
            ''
    );
}

export default TabContent;