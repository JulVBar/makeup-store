import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceFilter, setResetActiveList } from '../../../reducer/filtersReducer/filtersSlice';
import { filtersSelector } from '../../../reducer/filtersReducer/selectors';
import { RangeSlider, Row, InputGroup, InputNumber } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './priceSlider.scss';


const PriceSlider = () => {
    const [value, setValue] = useState([0, 100]);
    const dispatch = useDispatch();
    const { priceFilter } = useSelector(filtersSelector);

    useEffect(()=>{
        setValue(priceFilter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [priceFilter]);

    return (
    <Row>
        <div style={{ width: '90%', margin: '0 auto' }}>
            <RangeSlider
                progress
                style={{ margin: '1.5rem 1rem' }}
                value={value}
                onChange={value => {
                    setValue(value);
                    dispatch(setPriceFilter(value));
                    dispatch(setResetActiveList());
                }}
                barClassName="barClassName"
                handleClassName="handleClassName"
            />
        </div>
        <div className="inputGroup">
            
            <InputGroup style={{ margin: '1.5rem 1rem', width: 'auto' }}>
                <InputNumber
                    min={0}
                    max={100}
                    value={value[0]}
                    onChange={nextValue => {
                        const [start, end] = value;
                        if (nextValue > end) {
                        return;
                        }
                        setValue([+nextValue, +end]);
                        dispatch(setPriceFilter([+nextValue, +end]));
                        dispatch(setResetActiveList());;
                    }}
                    style={{ width: '6rem' }}
                />
                <InputGroup.Addon>to</InputGroup.Addon>
                <InputNumber
                    min={0}
                    max={100}
                    value={value[1]}
                    onChange={nextValue => {
                        const [start, end] = value;
                        if (start > nextValue) {
                        return;
                        }
                        setValue([+start, +nextValue]);
                        dispatch(setPriceFilter([+start, +nextValue]));
                        dispatch(setResetActiveList());
                    }}
                    style={{ width: '6rem'}}
                />
            </InputGroup>
        </div>
    </Row>
    );
}

export default PriceSlider;