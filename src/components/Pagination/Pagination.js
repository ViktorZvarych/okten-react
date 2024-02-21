import {useSearchParams} from "react-router-dom";
import { useEffect, useState} from "react";
import {episodesService} from "../../services";

const Pagination = () => {
    console.log('render Pagination');

    const [urlParams, setUrlParams] = useSearchParams({page: '1'});

    const [page, setPage] = useState({prev: null, next: null});

    const currentPage = urlParams.get('page') ? urlParams.get('page') : '1'

    useEffect(() => {
        episodesService.getAll(currentPage).then(({data}) => {
            setPage({prev: data.info.prev, next: data.info.prev});
            console.log(currentPage);
        });
    }, [urlParams.get('page')]);

    const changePage = async (e) => {
        const {data} = await episodesService.getAll(currentPage);

        if (data.info.prev && e.target.name === 'minus') {
            setPage({prev: data.info.prev, next: data.info.next});
            setUrlParams(prev => {
                prev.set('page', (+prev.get('page') - 1).toString());
                return prev;
            })
        }

        if (data.info.next && e.target.name === 'plus') {
            setPage({prev: data.info.prev, next: data.info.next});
            setUrlParams(prev => {
                prev.set('page', (+prev.get('page') + 1).toString())
                return prev;
            })
        }
    }

    return (
        <div>
            <button onClick={changePage} name={'minus'}>prev</button>
            <button onClick={changePage} name={'plus'}>next</button>
        </div>
    );
};

export {Pagination};